/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/documentation.js":
/*!****************************************************************!*\
  !*** ./resources/src/js/custom/documentation/documentation.js ***!
  \****************************************************************/
/***/ (() => {

eval("\n\nvar KTLayoutDocumentation = function () {\n  var _init = function _init(element) {\n    var elements = element;\n\n    if (typeof elements === 'undefined') {\n      elements = document.querySelectorAll('.highlight');\n    }\n\n    if (elements && elements.length > 0) {\n      for (var i = 0; i < elements.length; ++i) {\n        var highlight = elements[i];\n        var copy = highlight.querySelector('.highlight-copy');\n\n        if (copy) {\n          var clipboard = new ClipboardJS(copy, {\n            target: function target(trigger) {\n              var highlight = trigger.closest('.highlight');\n              var el = highlight.querySelector('.tab-pane.active');\n\n              if (el == null) {\n                el = highlight.querySelector('.highlight-code');\n              }\n\n              return el;\n            }\n          });\n          clipboard.on('success', function (e) {\n            var caption = e.trigger.innerHTML;\n            e.trigger.innerHTML = 'copied';\n            e.clearSelection();\n            setTimeout(function () {\n              e.trigger.innerHTML = caption;\n            }, 2000);\n          });\n        }\n      }\n    }\n  };\n\n  return {\n    init: function init(element) {\n      _init(element);\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTLayoutDocumentation.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsSUFBSUEscUJBQXFCLEdBQUcsWUFBVztBQUNuQyxNQUFJQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFTQyxPQUFULEVBQWtCO0FBQzFCLFFBQUlDLFFBQVEsR0FBR0QsT0FBZjs7QUFFQSxRQUFLLE9BQU9DLFFBQVAsS0FBb0IsV0FBekIsRUFBdUM7QUFDbkNBLE1BQUFBLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixDQUFYO0FBQ0g7O0FBRUQsUUFBS0YsUUFBUSxJQUFJQSxRQUFRLENBQUNHLE1BQVQsR0FBa0IsQ0FBbkMsRUFBdUM7QUFDbkMsV0FBTSxJQUFJQyxDQUFDLEdBQUcsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHSixRQUFRLENBQUNHLE1BQTlCLEVBQXNDLEVBQUVDLENBQXhDLEVBQTRDO0FBQ3hDLFlBQUlDLFNBQVMsR0FBR0wsUUFBUSxDQUFDSSxDQUFELENBQXhCO0FBQ0EsWUFBSUUsSUFBSSxHQUFHRCxTQUFTLENBQUNFLGFBQVYsQ0FBd0IsaUJBQXhCLENBQVg7O0FBRUEsWUFBS0QsSUFBTCxFQUFZO0FBQ1IsY0FBSUUsU0FBUyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JILElBQWhCLEVBQXNCO0FBQ2xDSSxZQUFBQSxNQUFNLEVBQUUsZ0JBQVNDLE9BQVQsRUFBa0I7QUFDdEIsa0JBQUlOLFNBQVMsR0FBR00sT0FBTyxDQUFDQyxPQUFSLENBQWdCLFlBQWhCLENBQWhCO0FBQ0Esa0JBQUlDLEVBQUUsR0FBR1IsU0FBUyxDQUFDRSxhQUFWLENBQXdCLGtCQUF4QixDQUFUOztBQUVBLGtCQUFLTSxFQUFFLElBQUksSUFBWCxFQUFrQjtBQUNkQSxnQkFBQUEsRUFBRSxHQUFHUixTQUFTLENBQUNFLGFBQVYsQ0FBd0IsaUJBQXhCLENBQUw7QUFDSDs7QUFFRCxxQkFBT00sRUFBUDtBQUNIO0FBVmlDLFdBQXRCLENBQWhCO0FBYUFMLFVBQUFBLFNBQVMsQ0FBQ00sRUFBVixDQUFhLFNBQWIsRUFBd0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hDLGdCQUFJQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0osT0FBRixDQUFVTSxTQUF4QjtBQUVBRixZQUFBQSxDQUFDLENBQUNKLE9BQUYsQ0FBVU0sU0FBVixHQUFzQixRQUF0QjtBQUNBRixZQUFBQSxDQUFDLENBQUNHLGNBQUY7QUFFQUMsWUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEJKLGNBQUFBLENBQUMsQ0FBQ0osT0FBRixDQUFVTSxTQUFWLEdBQXNCRCxPQUF0QjtBQUNILGFBRlMsRUFFUCxJQUZPLENBQVY7QUFHSCxXQVREO0FBVUg7QUFDSjtBQUNKO0FBQ0osR0F2Q0Q7O0FBeUNBLFNBQU87QUFDSEksSUFBQUEsSUFBSSxFQUFFLGNBQVNyQixPQUFULEVBQWtCO0FBQ3BCRCxNQUFBQSxLQUFLLENBQUNDLE9BQUQsQ0FBTDtBQUNIO0FBSEUsR0FBUDtBQUtILENBL0MyQixFQUE1QixDLENBaURBOzs7QUFDQXNCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ3pCLEVBQUFBLHFCQUFxQixDQUFDdUIsSUFBdEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmpzP2Y3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgS1RMYXlvdXREb2N1bWVudGF0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgX2luaXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCB0eXBlb2YgZWxlbWVudHMgPT09ICd1bmRlZmluZWQnICkge1xyXG4gICAgICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWdobGlnaHQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kgKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGlnaGxpZ2h0ID0gZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgY29weSA9IGhpZ2hsaWdodC5xdWVyeVNlbGVjdG9yKCcuaGlnaGxpZ2h0LWNvcHknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvcHkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyhjb3B5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogZnVuY3Rpb24odHJpZ2dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhpZ2hsaWdodCA9IHRyaWdnZXIuY2xvc2VzdCgnLmhpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gaGlnaGxpZ2h0LnF1ZXJ5U2VsZWN0b3IoJy50YWItcGFuZS5hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsID09IG51bGwgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwgPSBoaWdobGlnaHQucXVlcnlTZWxlY3RvcignLmhpZ2hsaWdodC1jb2RlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBib2FyZC5vbignc3VjY2VzcycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcHRpb24gPSBlLnRyaWdnZXIuaW5uZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50cmlnZ2VyLmlubmVySFRNTCA9ICdjb3BpZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNsZWFyU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50cmlnZ2VyLmlubmVySFRNTCA9IGNhcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBfaW5pdChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RMYXlvdXREb2N1bWVudGF0aW9uLmluaXQoKTtcclxufSk7Il0sIm5hbWVzIjpbIktUTGF5b3V0RG9jdW1lbnRhdGlvbiIsIl9pbml0IiwiZWxlbWVudCIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaSIsImhpZ2hsaWdodCIsImNvcHkiLCJxdWVyeVNlbGVjdG9yIiwiY2xpcGJvYXJkIiwiQ2xpcGJvYXJkSlMiLCJ0YXJnZXQiLCJ0cmlnZ2VyIiwiY2xvc2VzdCIsImVsIiwib24iLCJlIiwiY2FwdGlvbiIsImlubmVySFRNTCIsImNsZWFyU2VsZWN0aW9uIiwic2V0VGltZW91dCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/documentation.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/documentation.js"]();
/******/ 	
/******/ })()
;