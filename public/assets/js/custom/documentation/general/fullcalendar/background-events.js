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

/***/ "./resources/src/js/custom/documentation/general/fullcalendar/background-events.js":
/*!*****************************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/fullcalendar/background-events.js ***!
  \*****************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralFullCalendarEventsDemos = function () {\n  // Private functions\n  var exampleBackgroundEvents = function exampleBackgroundEvents() {\n    // Define colors\n    var green = KTUtil.getCssVariableValue('--bs-active-success');\n    var red = KTUtil.getCssVariableValue('--bs-active-danger'); // Initialize Fullcalendar -- for more info please visit the official site: https://fullcalendar.io/demos\n\n    var calendarEl = document.getElementById('kt_docs_fullcalendar_background_events');\n    var calendar = new FullCalendar.Calendar(calendarEl, {\n      headerToolbar: {\n        left: 'prev,next today',\n        center: 'title',\n        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'\n      },\n      initialDate: '2020-09-12',\n      navLinks: true,\n      // can click day/week names to navigate views\n      businessHours: true,\n      // display business hours\n      editable: true,\n      selectable: true,\n      events: [{\n        title: 'Business Lunch',\n        start: '2020-09-03T13:00:00',\n        constraint: 'businessHours'\n      }, {\n        title: 'Meeting',\n        start: '2020-09-13T11:00:00',\n        constraint: 'availableForMeeting',\n        // defined below\n        color: green\n      }, {\n        title: 'Conference',\n        start: '2020-09-18',\n        end: '2020-09-20'\n      }, {\n        title: 'Party',\n        start: '2020-09-29T20:00:00'\n      }, // areas where \"Meeting\" must be dropped\n      {\n        groupId: 'availableForMeeting',\n        start: '2020-09-11',\n        end: '2020-09-11',\n        display: 'background'\n      }, {\n        groupId: 'availableForMeeting',\n        start: '2020-09-13',\n        end: '2020-09-13',\n        display: 'background'\n      }, // red areas where no events can be dropped\n      {\n        start: '2020-09-24',\n        end: '2020-09-28',\n        overlap: false,\n        display: 'background',\n        color: red\n      }, {\n        start: '2020-09-06',\n        end: '2020-09-08',\n        overlap: false,\n        display: 'background',\n        color: red\n      }]\n    });\n    calendar.render();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBackgroundEvents();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralFullCalendarEventsDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZnVsbGNhbGVuZGFyL2JhY2tncm91bmQtZXZlbnRzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGdDQUFnQyxHQUFHLFlBQVc7QUFDakQ7QUFFQSxNQUFJQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQVc7QUFDeEM7QUFDQSxRQUFJQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIscUJBQTNCLENBQVo7QUFDQSxRQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsb0JBQTNCLENBQVYsQ0FId0MsQ0FLeEM7O0FBQ0EsUUFBSUUsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isd0NBQXhCLENBQWpCO0FBRUEsUUFBSUMsUUFBUSxHQUFHLElBQUlDLFlBQVksQ0FBQ0MsUUFBakIsQ0FBMEJMLFVBQTFCLEVBQXNDO0FBQ3BETSxNQUFBQSxhQUFhLEVBQUU7QUFDZEMsUUFBQUEsSUFBSSxFQUFFLGlCQURRO0FBRWRDLFFBQUFBLE1BQU0sRUFBRSxPQUZNO0FBR2RDLFFBQUFBLEtBQUssRUFBRTtBQUhPLE9BRHFDO0FBTXBEQyxNQUFBQSxXQUFXLEVBQUUsWUFOdUM7QUFPcERDLE1BQUFBLFFBQVEsRUFBRSxJQVAwQztBQU9wQztBQUNoQkMsTUFBQUEsYUFBYSxFQUFFLElBUnFDO0FBUS9CO0FBQ3JCQyxNQUFBQSxRQUFRLEVBQUUsSUFUMEM7QUFVcERDLE1BQUFBLFVBQVUsRUFBRSxJQVZ3QztBQVdwREMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDUEMsUUFBQUEsS0FBSyxFQUFFLGdCQURBO0FBRVBDLFFBQUFBLEtBQUssRUFBRSxxQkFGQTtBQUdQQyxRQUFBQSxVQUFVLEVBQUU7QUFITCxPQUFELEVBS1A7QUFDQ0YsUUFBQUEsS0FBSyxFQUFFLFNBRFI7QUFFQ0MsUUFBQUEsS0FBSyxFQUFFLHFCQUZSO0FBR0NDLFFBQUFBLFVBQVUsRUFBRSxxQkFIYjtBQUdvQztBQUNuQ0MsUUFBQUEsS0FBSyxFQUFFdkI7QUFKUixPQUxPLEVBV1A7QUFDQ29CLFFBQUFBLEtBQUssRUFBRSxZQURSO0FBRUNDLFFBQUFBLEtBQUssRUFBRSxZQUZSO0FBR0NHLFFBQUFBLEdBQUcsRUFBRTtBQUhOLE9BWE8sRUFnQlA7QUFDQ0osUUFBQUEsS0FBSyxFQUFFLE9BRFI7QUFFQ0MsUUFBQUEsS0FBSyxFQUFFO0FBRlIsT0FoQk8sRUFxQlA7QUFDQTtBQUNDSSxRQUFBQSxPQUFPLEVBQUUscUJBRFY7QUFFQ0osUUFBQUEsS0FBSyxFQUFFLFlBRlI7QUFHQ0csUUFBQUEsR0FBRyxFQUFFLFlBSE47QUFJQ0UsUUFBQUEsT0FBTyxFQUFFO0FBSlYsT0F0Qk8sRUE0QlA7QUFDQ0QsUUFBQUEsT0FBTyxFQUFFLHFCQURWO0FBRUNKLFFBQUFBLEtBQUssRUFBRSxZQUZSO0FBR0NHLFFBQUFBLEdBQUcsRUFBRSxZQUhOO0FBSUNFLFFBQUFBLE9BQU8sRUFBRTtBQUpWLE9BNUJPLEVBbUNQO0FBQ0E7QUFDQ0wsUUFBQUEsS0FBSyxFQUFFLFlBRFI7QUFFQ0csUUFBQUEsR0FBRyxFQUFFLFlBRk47QUFHQ0csUUFBQUEsT0FBTyxFQUFFLEtBSFY7QUFJQ0QsUUFBQUEsT0FBTyxFQUFFLFlBSlY7QUFLQ0gsUUFBQUEsS0FBSyxFQUFFcEI7QUFMUixPQXBDTyxFQTJDUDtBQUNDa0IsUUFBQUEsS0FBSyxFQUFFLFlBRFI7QUFFQ0csUUFBQUEsR0FBRyxFQUFFLFlBRk47QUFHQ0csUUFBQUEsT0FBTyxFQUFFLEtBSFY7QUFJQ0QsUUFBQUEsT0FBTyxFQUFFLFlBSlY7QUFLQ0gsUUFBQUEsS0FBSyxFQUFFcEI7QUFMUixPQTNDTztBQVg0QyxLQUF0QyxDQUFmO0FBZ0VBSSxJQUFBQSxRQUFRLENBQUNxQixNQUFUO0FBQ0EsR0F6RUQ7O0FBMkVBLFNBQU87QUFDTjtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDaEI5QixNQUFBQSx1QkFBdUI7QUFDdkI7QUFKSyxHQUFQO0FBTUEsQ0FwRnNDLEVBQXZDLEMsQ0FzRkE7OztBQUNBRSxNQUFNLENBQUM2QixrQkFBUCxDQUEwQixZQUFXO0FBQ3BDaEMsRUFBQUEsZ0NBQWdDLENBQUMrQixJQUFqQztBQUNBLENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZnVsbGNhbGVuZGFyL2JhY2tncm91bmQtZXZlbnRzLmpzPzk3YWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEdlbmVyYWxGdWxsQ2FsZW5kYXJFdmVudHNEZW1vcyA9IGZ1bmN0aW9uKCkge1xyXG5cdC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblxyXG5cdHZhciBleGFtcGxlQmFja2dyb3VuZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gRGVmaW5lIGNvbG9yc1xyXG5cdFx0dmFyIGdyZWVuID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLXN1Y2Nlc3MnKTtcclxuXHRcdHZhciByZWQgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtZGFuZ2VyJyk7XHJcblxyXG5cdFx0Ly8gSW5pdGlhbGl6ZSBGdWxsY2FsZW5kYXIgLS0gZm9yIG1vcmUgaW5mbyBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIHNpdGU6IGh0dHBzOi8vZnVsbGNhbGVuZGFyLmlvL2RlbW9zXHJcblx0XHR2YXIgY2FsZW5kYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9kb2NzX2Z1bGxjYWxlbmRhcl9iYWNrZ3JvdW5kX2V2ZW50cycpO1xyXG5cclxuXHRcdHZhciBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xyXG5cdFx0XHRoZWFkZXJUb29sYmFyOiB7XHJcblx0XHRcdFx0bGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcblx0XHRcdFx0Y2VudGVyOiAndGl0bGUnLFxyXG5cdFx0XHRcdHJpZ2h0OiAnZGF5R3JpZE1vbnRoLHRpbWVHcmlkV2Vlayx0aW1lR3JpZERheSxsaXN0TW9udGgnXHJcblx0XHRcdH0sXHJcblx0XHRcdGluaXRpYWxEYXRlOiAnMjAyMC0wOS0xMicsXHJcblx0XHRcdG5hdkxpbmtzOiB0cnVlLCAvLyBjYW4gY2xpY2sgZGF5L3dlZWsgbmFtZXMgdG8gbmF2aWdhdGUgdmlld3NcclxuXHRcdFx0YnVzaW5lc3NIb3VyczogdHJ1ZSwgLy8gZGlzcGxheSBidXNpbmVzcyBob3Vyc1xyXG5cdFx0XHRlZGl0YWJsZTogdHJ1ZSxcclxuXHRcdFx0c2VsZWN0YWJsZTogdHJ1ZSxcclxuXHRcdFx0ZXZlbnRzOiBbe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICdCdXNpbmVzcyBMdW5jaCcsXHJcblx0XHRcdFx0XHRzdGFydDogJzIwMjAtMDktMDNUMTM6MDA6MDAnLFxyXG5cdFx0XHRcdFx0Y29uc3RyYWludDogJ2J1c2luZXNzSG91cnMnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ01lZXRpbmcnLFxyXG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTEzVDExOjAwOjAwJyxcclxuXHRcdFx0XHRcdGNvbnN0cmFpbnQ6ICdhdmFpbGFibGVGb3JNZWV0aW5nJywgLy8gZGVmaW5lZCBiZWxvd1xyXG5cdFx0XHRcdFx0Y29sb3I6IGdyZWVuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ0NvbmZlcmVuY2UnLFxyXG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTE4JyxcclxuXHRcdFx0XHRcdGVuZDogJzIwMjAtMDktMjAnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aXRsZTogJ1BhcnR5JyxcclxuXHRcdFx0XHRcdHN0YXJ0OiAnMjAyMC0wOS0yOVQyMDowMDowMCdcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHQvLyBhcmVhcyB3aGVyZSBcIk1lZXRpbmdcIiBtdXN0IGJlIGRyb3BwZWRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRncm91cElkOiAnYXZhaWxhYmxlRm9yTWVldGluZycsXHJcblx0XHRcdFx0XHRzdGFydDogJzIwMjAtMDktMTEnLFxyXG5cdFx0XHRcdFx0ZW5kOiAnMjAyMC0wOS0xMScsXHJcblx0XHRcdFx0XHRkaXNwbGF5OiAnYmFja2dyb3VuZCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRncm91cElkOiAnYXZhaWxhYmxlRm9yTWVldGluZycsXHJcblx0XHRcdFx0XHRzdGFydDogJzIwMjAtMDktMTMnLFxyXG5cdFx0XHRcdFx0ZW5kOiAnMjAyMC0wOS0xMycsXHJcblx0XHRcdFx0XHRkaXNwbGF5OiAnYmFja2dyb3VuZCcsXHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0Ly8gcmVkIGFyZWFzIHdoZXJlIG5vIGV2ZW50cyBjYW4gYmUgZHJvcHBlZFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHN0YXJ0OiAnMjAyMC0wOS0yNCcsXHJcblx0XHRcdFx0XHRlbmQ6ICcyMDIwLTA5LTI4JyxcclxuXHRcdFx0XHRcdG92ZXJsYXA6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2JhY2tncm91bmQnLFxyXG5cdFx0XHRcdFx0Y29sb3I6IHJlZFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTA2JyxcclxuXHRcdFx0XHRcdGVuZDogJzIwMjAtMDktMDgnLFxyXG5cdFx0XHRcdFx0b3ZlcmxhcDogZmFsc2UsXHJcblx0XHRcdFx0XHRkaXNwbGF5OiAnYmFja2dyb3VuZCcsXHJcblx0XHRcdFx0XHRjb2xvcjogcmVkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9KTtcclxuXHJcblx0XHRjYWxlbmRhci5yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHQvLyBQdWJsaWMgRnVuY3Rpb25zXHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0ZXhhbXBsZUJhY2tncm91bmRFdmVudHMoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG5cdEtUR2VuZXJhbEZ1bGxDYWxlbmRhckV2ZW50c0RlbW9zLmluaXQoKTtcclxufSk7Il0sIm5hbWVzIjpbIktUR2VuZXJhbEZ1bGxDYWxlbmRhckV2ZW50c0RlbW9zIiwiZXhhbXBsZUJhY2tncm91bmRFdmVudHMiLCJncmVlbiIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCJyZWQiLCJjYWxlbmRhckVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbGVuZGFyIiwiRnVsbENhbGVuZGFyIiwiQ2FsZW5kYXIiLCJoZWFkZXJUb29sYmFyIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiaW5pdGlhbERhdGUiLCJuYXZMaW5rcyIsImJ1c2luZXNzSG91cnMiLCJlZGl0YWJsZSIsInNlbGVjdGFibGUiLCJldmVudHMiLCJ0aXRsZSIsInN0YXJ0IiwiY29uc3RyYWludCIsImNvbG9yIiwiZW5kIiwiZ3JvdXBJZCIsImRpc3BsYXkiLCJvdmVybGFwIiwicmVuZGVyIiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/fullcalendar/background-events.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/fullcalendar/background-events.js"]();
/******/ 	
/******/ })()
;