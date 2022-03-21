/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nconst animate = ({ timing, draw, duration }) => {\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst modal = () => {\r\n    const body = document.querySelector(\"body\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n    const callModal = document.querySelector(\".header-modal\");\r\n    const serviceModal = document.querySelector(\".services-modal\");\r\n    const imageOverlay = document.querySelectorAll(\".document-overlay\");\r\n    const imageBlock = document.querySelectorAll(\".text-center a\");\r\n    const image = document.querySelectorAll(\"a .img-responsive\");\r\n    const divImageBlock = document.querySelectorAll(\".text-center div.col-sm-4\");\r\n    console.log(divImageBlock);\r\n\r\n    imageOverlay.forEach((overlay) => {\r\n        overlay.style.display = \"none\";\r\n    });\r\n\r\n    body.addEventListener(\"click\", (e) => {\r\n        if (e.target.closest(\".button .btn\")) {\r\n            e.preventDefault();\r\n            overlay.style.display = \"block\";\r\n            callModal.style.display = \"block\";\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 400,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    callModal.style.top = 0 + \"%\";\r\n                    callModal.style.top = progress * 50 + \"%\";\r\n                },\r\n            });\r\n        }\r\n\r\n        if (e.target.closest(\".service-button .btn\")) {\r\n            e.preventDefault();\r\n            overlay.style.display = \"block\";\r\n            serviceModal.style.display = \"block\";\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 400,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    serviceModal.style.top = 0 + \"%\";\r\n                    serviceModal.style.top = progress * 50 + \"%\";\r\n                },\r\n            });\r\n        }\r\n\r\n        if (e.target.matches(\"span[title ~= Close]\")) {\r\n            overlay.style.display = \"none\";\r\n            serviceModal.style.display = \"none\";\r\n            callModal.style.display = \"none\";\r\n        }\r\n\r\n        if (e.target.closest(\".text-center a\")) {\r\n            e.preventDefault();\r\n            image.forEach((doc, index) => {\r\n                if (doc === e.target) {\r\n                    // overlay.style.display = \"block\";\r\n                    // doc.src = doc.parentElement.href;\r\n                    divImageBlock[index].classList.remove(\"col-sm-4\");\r\n                    divImageBlock[index].classList.add(\"service-modal--opened\");\r\n                    // divImageBlock[index].classList.add(\"service-modal\");\r\n                    // // divImageBlock[index].style.zIndex = 0;\r\n                    // // divImageBlock[index].style.position = \"fixed\";\r\n                    // doc.style.margin = \"auto\";\r\n                    divImageBlock[index].style.display = \"block\";\r\n                    doc.src = doc.parentElement.href;\r\n                    divImageBlock[index].style.position = \"static\";\r\n\r\n                    // // doc.classList.add(\"service-modal--opened\");\r\n                    // doc.style.width = 70 + \"%\";\r\n                    // doc.style.maxWidth = 700 + \"px\";\r\n                    console.dir(doc);\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;