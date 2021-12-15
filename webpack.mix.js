const mix = require("laravel-mix");
const glob = require("glob");
const path = require("path");
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");
const rimraf = require("rimraf");
const del = require("del");
const fs = require("fs");


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// Global jquery
mix.autoload({
    jquery: ["$", "jQuery"],
    Popper: ["popper.js", "default"],
});

mix.options({
    cssNano: {
        discardComments: false,
    },
});

// Remove existing generated assets from public folder
del.sync([
    "public/assets/css/*",
    "public/assets/js/*",
    "public/assets/media/*",
    "public/assets/plugins/*",
]);

// Build 3rd party plugins css/js
mix.sass(
    `resources/src/webpack/plugins/plugins.scss`,
    `public/plugins/global/plugins.bundle.css`
)
    .then(() => {
        // remove unused preprocessed fonts folder
        rimraf(path.resolve("public/assets/fonts"), () => {});
        rimraf(path.resolve("public/assets/images"), () => {});
    })
    .sourceMaps(!mix.inProduction())
    // .setResourceRoot('./')
    .options({ processCssUrls: false })
    .js(
        [`resources/src/webpack/plugins/plugins.js`],
        `public/assets/plugins/global/plugins.bundle.js`
    );

// Build extended plugin styles
mix.sass(
    `resources/src/sass/plugins.scss`,
    `public/assets/plugins/global/plugins-custom.bundle.css`
);

// Build Metronic css/js
mix.sass(
    `resources/src/sass/style.scss`,
    `public/assets/css/style.bundle.css`,
    {
        sassOptions: { includePaths: ["node_modules"] },
    }
)
    // .options({processCssUrls: false})
    .js(
        [`resources/src/webpack/scripts.js`],
        `public/assets/js/scripts.bundle.js`
    )
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "resources/"),
            },
        },
    });

// Build custom 3rd party plugins
(glob.sync(`resources/src/webpack/plugins/custom/**/*.js`) || []).forEach(
    (file) => {
        mix.js(
            file,
            `public/assets/${file
                .replace(`resources/src/webpack/`, "")
                .replace(".js", ".bundle.js")}`
        );
    }
);
(glob.sync(`resources/src/webpack/plugins/custom/**/*.scss`) || []).forEach(
    (file) => {
        mix.sass(
            file,
            `public/assets/${file
                .replace(`resources/src/webpack/`, "")
                .replace(".scss", ".bundle.css")}`
        );
    }
);

// Build Metronic css pages (single page use)
(glob.sync(`resources/src/sass/pages/**/!(_)*.scss`) || []).forEach((file) => {
    file = file.replace(/[\\\/]+/g, "/");
    mix.sass(
        file,
        file
            .replace(`resources/src/sass`, `public/assets/css`)
            .replace(/\.scss$/, ".css")
    );
});

var extendedFiles = [];
// Extend custom js files for laravel
(glob.sync("resources/assets/extended/js/**/*.js") || []).forEach((file) => {
    var output = `public/assets/${file.replace(
        "resources/assets/extended/",
        ""
    )}`;
    mix.js(file, output);
    extendedFiles.push(output);
});

// Metronic js pages (single page use)
(glob.sync("resources/src/webpack/js/custom/**/*.js") || []).forEach((file) => {
    var output = `public/assets/${file.replace("resources/src/webpack/", "")}`;
    if (extendedFiles.indexOf(output) === -1) {
        mix.js(file, output);
    }
});
(glob.sync(`resources/src/js/custom/**/*.js`) || []).forEach((file) => {
    var output = `public/assets/${file.replace(`resources/src/`, "")}`;
    if (extendedFiles.indexOf(output) === -1) {
        mix.js(file, output);
    }
});

// Metronic media
mix.copyDirectory(`resources/src/media`, `public/assets/media`);

// Metronic theme
(glob.sync(`resources/src/sass/themes/**/!(_)*.scss`) || []).forEach((file) => {
    file = file.replace(/[\\\/]+/g, "/");
    mix.sass(
        file,
        file
            .replace(`resources/src/sass`, `public/assts/css`)
            .replace(/\.scss$/, ".css")
    );
});

let plugins = [
    new ReplaceInFileWebpackPlugin([
        {
            // rewrite font paths
            dir: path.resolve(`public/assets`),
            test: /\.css$/,
            rules: [
                {
                    // fontawesome
                    search: /url\((\.\.\/)?webfonts\/(fa-.*?)"?\)/g,
                    replace: "url(./fonts/@fortawesome/$2)",
                },
                {
                    // flaticon
                    search: /url\(("?\.\/)?font\/(Flaticon\..*?)"?\)/g,
                    replace: "url(./fonts/flaticon/$2)",
                },
                {
                    // flaticon2
                    search: /url\(("?\.\/)?font\/(Flaticon2\..*?)"?\)/g,
                    replace: "url(./fonts/flaticon2/$2)",
                },
                {
                    // keenthemes fonts
                    search: /url\(("?\.\/)?(Ki\..*?)"?\)/g,
                    replace: "url(./fonts/keenthemes-icons/$2)",
                },
                {
                    // lineawesome fonts
                    search: /url\(("?\.\.\/)?fonts\/(la-.*?)"?\)/g,
                    replace: "url(./fonts/line-awesome/$2)",
                },
                {
                    // socicons
                    search: /url\(("?\.\.\/)?font\/(socicon\..*?)"?\)/g,
                    replace: "url(./fonts/socicon/$2)",
                },
                {
                    // bootstrap-icons
                    search: /url\(.*?(bootstrap-icons\..*?)"?\)/g,
                    replace: "url(./fonts/bootstrap-icons/$1)",
                },
            ],
        },
    ]),
];

mix.webpackConfig({
    plugins: plugins,
    ignoreWarnings: [
        {
            module: /esri-leaflet/,
            message: /version/,
        },
    ],
    resolve: {
        fallback: {
            fs: false
        }
    }
});

// Webpack.mix does not copy fonts, manually copy
(glob.sync(`resources/src/plugins/**/*.+(woff|woff2|eot|ttf)`) || []).forEach(
    (file) => {
        var folder = file.match(/resources\/metronic\/plugins\/(.*?)\//)[1];
        mix.copy(
            file,
            `public/assets/plugins/global/fonts/${folder}/${path.basename(
                file
            )}`
        );
    }
);
(
    glob.sync(
        "node_modules/+(@fortawesome|socicon|line-awesome|bootstrap-icons)/**/*.+(woff|woff2|eot|ttf)"
    ) || []
).forEach((file) => {
    var folder = file.match(/node_modules\/(.*?)\//)[1];
    mix.copy(
        file,
        `public/assets/plugins/global/fonts/${folder}/${path.basename(file)}`
    );
});

// Raw plugins
(glob.sync(`resources/src/webpack/plugins/custom/**/*.js.json`) || []).forEach(
    (file) => {
        let filePaths = JSON.parse(fs.readFileSync(file, "utf-8"));
        const fileName = path.basename(file).replace(".js.json", "");
        mix.scripts(
            filePaths,
            `public/assets/plugins/custom/${fileName}/${fileName}.bundle.js`
        );
    }
);

