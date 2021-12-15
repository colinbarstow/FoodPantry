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

/***/ "./resources/src/js/custom/authentication/password-reset/new-password.js":
/*!*******************************************************************************!*\
  !*** ./resources/src/js/custom/authentication/password-reset/new-password.js ***!
  \*******************************************************************************/
/***/ (() => {

eval(" // Class Definition\n\nvar KTPasswordResetNewPassword = function () {\n  // Elements\n  var form;\n  var submitButton;\n  var validator;\n  var passwordMeter;\n\n  var handleForm = function handleForm(e) {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'password': {\n          validators: {\n            notEmpty: {\n              message: 'The password is required'\n            },\n            callback: {\n              message: 'Please enter valid password',\n              callback: function callback(input) {\n                if (input.value.length > 0) {\n                  return validatePassword();\n                }\n              }\n            }\n          }\n        },\n        'confirm-password': {\n          validators: {\n            notEmpty: {\n              message: 'The password confirmation is required'\n            },\n            identical: {\n              compare: function compare() {\n                return form.querySelector('[name=\"password\"]').value;\n              },\n              message: 'The password and its confirm are not the same'\n            }\n          }\n        },\n        'toc': {\n          validators: {\n            notEmpty: {\n              message: 'You must accept the terms and conditions'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger({\n          event: {\n            password: false\n          }\n        }),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      validator.revalidateField('password');\n      validator.validate().then(function (status) {\n        if (status == 'Valid') {\n          // Show loading indication\n          submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n          submitButton.disabled = true; // Simulate ajax request\n\n          setTimeout(function () {\n            // Hide loading indication\n            submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n            submitButton.disabled = false; // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            Swal.fire({\n              text: \"You have successfully reset your password!\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            }).then(function (result) {\n              if (result.isConfirmed) {\n                form.querySelector('[name=\"password\"]').value = \"\";\n                form.querySelector('[name=\"confirm-password\"]').value = \"\";\n                passwordMeter.reset(); // reset password meter\n                //form.submit();\n              }\n            });\n          }, 1500);\n        } else {\n          // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n          Swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n    form.querySelector('input[name=\"password\"]').addEventListener('input', function () {\n      if (this.value.length > 0) {\n        validator.updateFieldStatus('password', 'NotValidated');\n      }\n    });\n  };\n\n  var validatePassword = function validatePassword() {\n    return passwordMeter.getScore() === 100;\n  }; // Public Functions\n\n\n  return {\n    // public functions\n    init: function init() {\n      form = document.querySelector('#kt_new_password_form');\n      submitButton = document.querySelector('#kt_new_password_submit');\n      passwordMeter = KTPasswordMeter.getInstance(form.querySelector('[data-kt-password-meter=\"true\"]'));\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTPasswordResetNewPassword.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9wYXNzd29yZC1yZXNldC9uZXctcGFzc3dvcmQuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsMEJBQTBCLEdBQUcsWUFBVztBQUN4QztBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsU0FBSjtBQUNBLE1BQUlDLGFBQUo7O0FBRUEsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBU0MsQ0FBVCxFQUFZO0FBQ3pCO0FBQ0FILElBQUFBLFNBQVMsR0FBR0ksY0FBYyxDQUFDQyxjQUFmLENBQ2pCUCxJQURpQixFQUVqQjtBQUNDUSxNQUFBQSxNQUFNLEVBQUU7QUFDUSxvQkFBWTtBQUNSQyxVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURILGFBREY7QUFJUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05ELGNBQUFBLE9BQU8sRUFBRSw2QkFESDtBQUVOQyxjQUFBQSxRQUFRLEVBQUUsa0JBQVNDLEtBQVQsRUFBZ0I7QUFDdEIsb0JBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLHlCQUFPQyxnQkFBZ0IsRUFBdkI7QUFDSDtBQUNKO0FBTks7QUFKRjtBQURKLFNBRHBCO0FBZ0JRLDRCQUFvQjtBQUNoQlAsVUFBQUEsVUFBVSxFQUFFO0FBQ1JDLFlBQUFBLFFBQVEsRUFBRTtBQUNOQyxjQUFBQSxPQUFPLEVBQUU7QUFESCxhQURGO0FBSVJNLFlBQUFBLFNBQVMsRUFBRTtBQUNQQyxjQUFBQSxPQUFPLEVBQUUsbUJBQVc7QUFDaEIsdUJBQU9sQixJQUFJLENBQUNtQixhQUFMLENBQW1CLG1CQUFuQixFQUF3Q0wsS0FBL0M7QUFDSCxlQUhNO0FBSVBILGNBQUFBLE9BQU8sRUFBRTtBQUpGO0FBSkg7QUFESSxTQWhCNUI7QUE2QlEsZUFBTztBQUNIRixVQUFBQSxVQUFVLEVBQUU7QUFDUkMsWUFBQUEsUUFBUSxFQUFFO0FBQ05DLGNBQUFBLE9BQU8sRUFBRTtBQURIO0FBREY7QUFEVDtBQTdCZixPQURUO0FBc0NDUyxNQUFBQSxPQUFPLEVBQUU7QUFDUkMsUUFBQUEsT0FBTyxFQUFFLElBQUlmLGNBQWMsQ0FBQ2MsT0FBZixDQUF1QkUsT0FBM0IsQ0FBbUM7QUFDekJDLFVBQUFBLEtBQUssRUFBRTtBQUNIQyxZQUFBQSxRQUFRLEVBQUU7QUFEUDtBQURrQixTQUFuQyxDQUREO0FBTVJDLFFBQUFBLFNBQVMsRUFBRSxJQUFJbkIsY0FBYyxDQUFDYyxPQUFmLENBQXVCTSxVQUEzQixDQUFzQztBQUM5QkMsVUFBQUEsV0FBVyxFQUFFLFNBRGlCO0FBRTlCQyxVQUFBQSxlQUFlLEVBQUUsRUFGYTtBQUc5QkMsVUFBQUEsYUFBYSxFQUFFO0FBSGUsU0FBdEM7QUFOSDtBQXRDVixLQUZpQixDQUFaO0FBdURBNUIsSUFBQUEsWUFBWSxDQUFDNkIsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBVXpCLENBQVYsRUFBYTtBQUNoREEsTUFBQUEsQ0FBQyxDQUFDMEIsY0FBRjtBQUVBN0IsTUFBQUEsU0FBUyxDQUFDOEIsZUFBVixDQUEwQixVQUExQjtBQUVBOUIsTUFBQUEsU0FBUyxDQUFDK0IsUUFBVixHQUFxQkMsSUFBckIsQ0FBMEIsVUFBU0MsTUFBVCxFQUFpQjtBQUM3QyxZQUFJQSxNQUFNLElBQUksT0FBZCxFQUF1QjtBQUNiO0FBQ0FsQyxVQUFBQSxZQUFZLENBQUNtQyxZQUFiLENBQTBCLG1CQUExQixFQUErQyxJQUEvQyxFQUZhLENBSWI7O0FBQ0FuQyxVQUFBQSxZQUFZLENBQUNvQyxRQUFiLEdBQXdCLElBQXhCLENBTGEsQ0FPYjs7QUFDQUMsVUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEI7QUFDQXJDLFlBQUFBLFlBQVksQ0FBQ3NDLGVBQWIsQ0FBNkIsbUJBQTdCLEVBRmtCLENBSWxCOztBQUNBdEMsWUFBQUEsWUFBWSxDQUFDb0MsUUFBYixHQUF3QixLQUF4QixDQUxrQixDQU9sQjs7QUFDQUcsWUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsY0FBQUEsSUFBSSxFQUFFLDRDQURBO0FBRU5DLGNBQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLGNBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLGNBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkMsY0FBQUEsV0FBVyxFQUFFO0FBQ1RDLGdCQUFBQSxhQUFhLEVBQUU7QUFETjtBQUxQLGFBQVYsRUFRR2IsSUFSSCxDQVFRLFVBQVVjLE1BQVYsRUFBa0I7QUFDdEIsa0JBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUNwQmpELGdCQUFBQSxJQUFJLENBQUNtQixhQUFMLENBQW1CLG1CQUFuQixFQUF3Q0wsS0FBeEMsR0FBK0MsRUFBL0M7QUFDQWQsZ0JBQUFBLElBQUksQ0FBQ21CLGFBQUwsQ0FBbUIsMkJBQW5CLEVBQWdETCxLQUFoRCxHQUF1RCxFQUF2RDtBQUNBWCxnQkFBQUEsYUFBYSxDQUFDK0MsS0FBZCxHQUhvQixDQUdJO0FBQ3hCO0FBQ0g7QUFDSixhQWZEO0FBZ0JILFdBeEJTLEVBd0JQLElBeEJPLENBQVY7QUF5QkgsU0FqQ1AsTUFpQ2E7QUFDSDtBQUNBVixVQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxZQUFBQSxJQUFJLEVBQUUscUVBREE7QUFFTkMsWUFBQUEsSUFBSSxFQUFFLE9BRkE7QUFHTkMsWUFBQUEsY0FBYyxFQUFFLEtBSFY7QUFJTkMsWUFBQUEsaUJBQWlCLEVBQUUsYUFKYjtBQUtOQyxZQUFBQSxXQUFXLEVBQUU7QUFDVEMsY0FBQUEsYUFBYSxFQUFFO0FBRE47QUFMUCxXQUFWO0FBU0g7QUFDVixPQTlDSztBQStDSCxLQXBERDtBQXNEQS9DLElBQUFBLElBQUksQ0FBQ21CLGFBQUwsQ0FBbUIsd0JBQW5CLEVBQTZDVyxnQkFBN0MsQ0FBOEQsT0FBOUQsRUFBdUUsWUFBVztBQUM5RSxVQUFJLEtBQUtoQixLQUFMLENBQVdDLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJiLFFBQUFBLFNBQVMsQ0FBQ2lELGlCQUFWLENBQTRCLFVBQTVCLEVBQXdDLGNBQXhDO0FBQ0g7QUFDSixLQUpEO0FBS0gsR0FwSEQ7O0FBc0hBLE1BQUluQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQVc7QUFHOUIsV0FBU2IsYUFBYSxDQUFDaUQsUUFBZCxPQUE2QixHQUF0QztBQUNILEdBSkQsQ0E3SHdDLENBbUl4Qzs7O0FBQ0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNickQsTUFBQUEsSUFBSSxHQUFHc0QsUUFBUSxDQUFDbkMsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBUDtBQUNBbEIsTUFBQUEsWUFBWSxHQUFHcUQsUUFBUSxDQUFDbkMsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBZjtBQUNBaEIsTUFBQUEsYUFBYSxHQUFHb0QsZUFBZSxDQUFDQyxXQUFoQixDQUE0QnhELElBQUksQ0FBQ21CLGFBQUwsQ0FBbUIsaUNBQW5CLENBQTVCLENBQWhCO0FBRUFmLE1BQUFBLFVBQVU7QUFDYjtBQVJFLEdBQVA7QUFVSCxDQTlJZ0MsRUFBakMsQyxDQWdKQTs7O0FBQ0FxRCxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakMzRCxFQUFBQSwwQkFBMEIsQ0FBQ3NELElBQTNCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2F1dGhlbnRpY2F0aW9uL3Bhc3N3b3JkLXJlc2V0L25ldy1wYXNzd29yZC5qcz81NDFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgRGVmaW5pdGlvblxyXG52YXIgS1RQYXNzd29yZFJlc2V0TmV3UGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIEVsZW1lbnRzXHJcbiAgICB2YXIgZm9ybTtcclxuICAgIHZhciBzdWJtaXRCdXR0b247XHJcbiAgICB2YXIgdmFsaWRhdG9yO1xyXG4gICAgdmFyIHBhc3N3b3JkTWV0ZXI7XHJcblxyXG4gICAgdmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cclxuICAgICAgICB2YWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcclxuXHRcdFx0Zm9ybSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZpZWxkczoge1x0XHRcdFx0XHQgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgcGFzc3dvcmQgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHZhbGlkIHBhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUGFzc3dvcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpcm0tcGFzc3dvcmQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBwYXNzd29yZCBjb25maXJtYXRpb24gaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpY2FsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgcGFzc3dvcmQgYW5kIGl0cyBjb25maXJtIGFyZSBub3QgdGhlIHNhbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICd0b2MnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdSBtdXN0IGFjY2VwdCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwbHVnaW5zOiB7XHJcblx0XHRcdFx0XHR0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuXHRcdFx0XHRcdGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5yZXZhbGlkYXRlRmllbGQoJ3Bhc3N3b3JkJyk7XHJcblxyXG4gICAgICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uKHN0YXR1cykge1xyXG5cdFx0ICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIGFqYXggcmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhpZGUgbG9hZGluZyBpbmRpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmFibGUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBtZXNzYWdlIHBvcHVwLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHJlc2V0IHlvdXIgcGFzc3dvcmQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJwYXNzd29yZFwiXScpLnZhbHVlPSBcIlwiOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJjb25maXJtLXBhc3N3b3JkXCJdJykudmFsdWU9IFwiXCI7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRNZXRlci5yZXNldCgpOyAgLy8gcmVzZXQgcGFzc3dvcmQgbWV0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Zvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDE1MDApOyAgIFx0XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGVycm9yIHBvcHVwLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cclxuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvcnJ5LCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzb21lIGVycm9ycyBkZXRlY3RlZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdCAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGFzc3dvcmRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IudXBkYXRlRmllbGRTdGF0dXMoJ3Bhc3N3b3JkJywgJ05vdFZhbGlkYXRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHZhbGlkYXRlUGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuICAocGFzc3dvcmRNZXRlci5nZXRTY29yZSgpID09PSAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gcHVibGljIGZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X25ld19wYXNzd29yZF9mb3JtJyk7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9uZXdfcGFzc3dvcmRfc3VibWl0Jyk7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkTWV0ZXIgPSBLVFBhc3N3b3JkTWV0ZXIuZ2V0SW5zdGFuY2UoZm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1wYXNzd29yZC1tZXRlcj1cInRydWVcIl0nKSk7XHJcblxyXG4gICAgICAgICAgICBoYW5kbGVGb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUUGFzc3dvcmRSZXNldE5ld1Bhc3N3b3JkLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVFBhc3N3b3JkUmVzZXROZXdQYXNzd29yZCIsImZvcm0iLCJzdWJtaXRCdXR0b24iLCJ2YWxpZGF0b3IiLCJwYXNzd29yZE1ldGVyIiwiaGFuZGxlRm9ybSIsImUiLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwidmFsaWRhdG9ycyIsIm5vdEVtcHR5IiwibWVzc2FnZSIsImNhbGxiYWNrIiwiaW5wdXQiLCJ2YWx1ZSIsImxlbmd0aCIsInZhbGlkYXRlUGFzc3dvcmQiLCJpZGVudGljYWwiLCJjb21wYXJlIiwicXVlcnlTZWxlY3RvciIsInBsdWdpbnMiLCJ0cmlnZ2VyIiwiVHJpZ2dlciIsImV2ZW50IiwicGFzc3dvcmQiLCJib290c3RyYXAiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJlbGVJbnZhbGlkQ2xhc3MiLCJlbGVWYWxpZENsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwicmV2YWxpZGF0ZUZpZWxkIiwidmFsaWRhdGUiLCJ0aGVuIiwic3RhdHVzIiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInJlc2V0IiwidXBkYXRlRmllbGRTdGF0dXMiLCJnZXRTY29yZSIsImluaXQiLCJkb2N1bWVudCIsIktUUGFzc3dvcmRNZXRlciIsImdldEluc3RhbmNlIiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/authentication/password-reset/new-password.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/authentication/password-reset/new-password.js"]();
/******/ 	
/******/ })()
;