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

/***/ "./resources/src/js/custom/modals/share-earn.js":
/*!******************************************************!*\
  !*** ./resources/src/js/custom/modals/share-earn.js ***!
  \******************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTModalShareEarn = function () {\n  // Private functions\n  var handleForm = function handleForm() {\n    var button = document.querySelector('#kt_share_earn_link_copy_button');\n    var input = document.querySelector('#kt_share_earn_link_input');\n    var clipboard = new ClipboardJS(button);\n\n    if (!clipboard) {\n      return;\n    } //  Copy text to clipboard. For more info check the plugin's documentation: https://clipboardjs.com/\n\n\n    clipboard.on('success', function (e) {\n      var buttonCaption = button.innerHTML; //Add bgcolor\n\n      input.classList.add('bg-success');\n      input.classList.add('text-inverse-success');\n      button.innerHTML = 'Copied!';\n      setTimeout(function () {\n        button.innerHTML = buttonCaption; // Remove bgcolor\n\n        input.classList.remove('bg-success');\n        input.classList.remove('text-inverse-success');\n      }, 3000); // 3seconds\n\n      e.clearSelection();\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTModalShareEarn.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9tb2RhbHMvc2hhcmUtZWFybi5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxnQkFBZ0IsR0FBRyxZQUFZO0FBQy9CO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUN4QixRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQ0FBdkIsQ0FBYjtBQUNBLFFBQUlDLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQUFaO0FBQ0EsUUFBSUUsU0FBUyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JMLE1BQWhCLENBQWhCOztBQUVBLFFBQUksQ0FBQ0ksU0FBTCxFQUFnQjtBQUNaO0FBQ0gsS0FQdUIsQ0FTeEI7OztBQUNBQSxJQUFBQSxTQUFTLENBQUNFLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLFVBQVNDLENBQVQsRUFBWTtBQUNoQyxVQUFJQyxhQUFhLEdBQUdSLE1BQU0sQ0FBQ1MsU0FBM0IsQ0FEZ0MsQ0FFaEM7O0FBQ0FOLE1BQUFBLEtBQUssQ0FBQ08sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsWUFBcEI7QUFDQVIsTUFBQUEsS0FBSyxDQUFDTyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixzQkFBcEI7QUFFQVgsTUFBQUEsTUFBTSxDQUFDUyxTQUFQLEdBQW1CLFNBQW5CO0FBRUFHLE1BQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCWixRQUFBQSxNQUFNLENBQUNTLFNBQVAsR0FBbUJELGFBQW5CLENBRGtCLENBR2xCOztBQUNBTCxRQUFBQSxLQUFLLENBQUNPLFNBQU4sQ0FBZ0JHLE1BQWhCLENBQXVCLFlBQXZCO0FBQ0FWLFFBQUFBLEtBQUssQ0FBQ08sU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUIsc0JBQXZCO0FBQ0gsT0FOUyxFQU1QLElBTk8sQ0FBVixDQVJnQyxDQWNyQjs7QUFFWE4sTUFBQUEsQ0FBQyxDQUFDTyxjQUFGO0FBQ0gsS0FqQkQ7QUFrQkgsR0E1QkQsQ0FGK0IsQ0FnQy9COzs7QUFDQSxTQUFPO0FBQ0hDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkaEIsTUFBQUEsVUFBVTtBQUNiO0FBSEUsR0FBUDtBQUtILENBdENzQixFQUF2QixDLENBd0NBOzs7QUFDQWlCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ25CLEVBQUFBLGdCQUFnQixDQUFDaUIsSUFBakI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vbW9kYWxzL3NoYXJlLWVhcm4uanM/MzM2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUTW9kYWxTaGFyZUVhcm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X3NoYXJlX2Vhcm5fbGlua19jb3B5X2J1dHRvbicpO1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9zaGFyZV9lYXJuX2xpbmtfaW5wdXQnKTtcclxuICAgICAgICB2YXIgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZEpTKGJ1dHRvbik7XHJcblxyXG4gICAgICAgIGlmICghY2xpcGJvYXJkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICBDb3B5IHRleHQgdG8gY2xpcGJvYXJkLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBkb2N1bWVudGF0aW9uOiBodHRwczovL2NsaXBib2FyZGpzLmNvbS9cclxuICAgICAgICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25DYXB0aW9uID0gYnV0dG9uLmlubmVySFRNTDtcclxuICAgICAgICAgICAgLy9BZGQgYmdjb2xvclxyXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdiZy1zdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3RleHQtaW52ZXJzZS1zdWNjZXNzJyk7XHJcblxyXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ0NvcGllZCEnO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBidXR0b25DYXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBiZ2NvbG9yXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1zdWNjZXNzJyk7IFxyXG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgndGV4dC1pbnZlcnNlLXN1Y2Nlc3MnKTsgXHJcbiAgICAgICAgICAgIH0sIDMwMDApOyAgLy8gM3NlY29uZHNcclxuXHJcbiAgICAgICAgICAgIGUuY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUZvcm0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVE1vZGFsU2hhcmVFYXJuLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVE1vZGFsU2hhcmVFYXJuIiwiaGFuZGxlRm9ybSIsImJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0IiwiY2xpcGJvYXJkIiwiQ2xpcGJvYXJkSlMiLCJvbiIsImUiLCJidXR0b25DYXB0aW9uIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImNsZWFyU2VsZWN0aW9uIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/modals/share-earn.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/modals/share-earn.js"]();
/******/ 	
/******/ })()
;