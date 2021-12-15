<!DOCTYPE html>
    <html lang="en">
        @include('admin.partials.head.head')
        <body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed">
            <div class="d-flex flex-column flex-root">
                <div class="page d-flex flex-row flex-column-fluid">
                    @include('admin.partials.aside.aside')
                    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                        @include('admin.partials.header.header')
                        @include('admin.partials.toolbar.toolbar')
                        @include('admin.partials.content.content')
                        @include('admin.partials.footer.footer')
                    </div>
                </div>
            </div>
            @include('admin.partials.activities-drawer.activities-drawer')
            @include('admin.partials.explore-drawer.explore-drawer-button')
            @include('admin.partials.explore-drawer.explore-drawer')
            @include('admin.partials.chat-drawer.chat-drawer')
            @include('admin.partials.modals.create-modal')
            @include('admin.partials.modals.location-modal')
            @include('admin.partials.modals.upgrade-modal')
            @include('admin.partials.scroll-to-top')
            @include('admin.partials.scripts')
        </body>
</html>
