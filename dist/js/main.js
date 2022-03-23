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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/valid */ \"./modules/valid.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"25 march 2022\", \".okna\");\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"30 march 2022\", \".balkony\");\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"5 april 2022\", \".kuhni\");\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_valid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst calc = () => {\r\n    const balkony = document.querySelector(\".balkony\");\r\n    const calc = balkony.querySelector(\"#calc\");\r\n\r\n    calc.addEventListener(\"change\", (e) => {\r\n        const typeValue = balkony.querySelector(\"#calc-type\").value;\r\n        const materialValue = balkony.querySelector(\"#calc-type-material\").value;\r\n        const squareValue = balkony.querySelector(\"#calc-input\").value;\r\n        const total = balkony.querySelector(\"#calc-total\");\r\n\r\n        if (typeValue && materialValue && squareValue) {\r\n            total.value = typeValue * materialValue * squareValue;\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst modal = () => {\r\n    const body = document.querySelector(\"body\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n    const callModal = document.querySelector(\".header-modal\");\r\n    const serviceModal = document.querySelector(\".services-modal\");\r\n    const imageOverlay = document.querySelectorAll(\".document-overlay\");\r\n\r\n    imageOverlay.forEach((overlay) => {\r\n        overlay.style.display = \"none\";\r\n    });\r\n\r\n    body.addEventListener(\"click\", (e) => {\r\n        if (e.target.closest(\".button .btn\")) {\r\n            e.preventDefault();\r\n            overlay.style.display = \"block\";\r\n            callModal.style.display = \"block\";\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 400,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    callModal.style.top = 0 + \"%\";\r\n                    callModal.style.top = progress * 50 + \"%\";\r\n                },\r\n            });\r\n        }\r\n\r\n        if (e.target.closest(\".service-button .btn\")) {\r\n            e.preventDefault();\r\n            overlay.style.display = \"block\";\r\n            serviceModal.style.display = \"block\";\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 400,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    serviceModal.style.top = 0 + \"%\";\r\n                    serviceModal.style.top = progress * 50 + \"%\";\r\n                },\r\n            });\r\n        }\r\n\r\n        if (e.target.matches(\"span[title ~= Close]\")) {\r\n            overlay.style.display = \"none\";\r\n            serviceModal.style.display = \"none\";\r\n            callModal.style.display = \"none\";\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst smoothScroll = () => {\r\n    const body = document.querySelector(\"body\");\r\n    const services = document.getElementById(\"services\");\r\n    const scroll = document.querySelector(\".smooth-scroll\");\r\n\r\n    scroll.style.display = \"none\";\r\n\r\n    document.addEventListener(\"scroll\", () => {\r\n        let firstPage = services.getBoundingClientRect();\r\n        if (firstPage.top > 542) {\r\n            scroll.style.display = \"none\";\r\n        } else {\r\n            scroll.style.display = \"block\";\r\n        }\r\n    });\r\n\r\n    scroll.addEventListener(\"click\", () => {\r\n        body.scrollIntoView({\r\n            behavior: \"smooth\",\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst slider = () => {\r\n    const body = document.querySelector(\"body\");\r\n    const benefitBlock = document.querySelectorAll(\".benefits__item\");\r\n    const services = document.getElementById(\"services\");\r\n    const serviceBlock = services.querySelectorAll(\".col-md-12\");\r\n\r\n    //numberLarge - how many elements to show on the screen for large screen with screenWidthLarge width and higher\r\n    //numberSmall - how many elements to show on the screen for screen width lower then screenWidthLarge\r\n    const visibleSlider = (domElement, numberLarge, numberSmall, screenWidthLarge = 576) => {\r\n        domElement.forEach((item) => {\r\n            item.style.display = \"none\";\r\n        });\r\n\r\n        if (screen.width >= screenWidthLarge) {\r\n            for (let i = 0; i < numberLarge; i++) {\r\n                domElement[i].style.display = \"block\";\r\n            }\r\n        } else {\r\n            for (let i = 0; i < numberSmall; i++) {\r\n                domElement[i].style.display = \"block\";\r\n            }\r\n        }\r\n    };\r\n\r\n    visibleSlider(benefitBlock, 3, 1);\r\n    visibleSlider(serviceBlock, 2, 1);\r\n\r\n    const moveRight = (domElement) => {\r\n        //array of elements that are visible on the screen\r\n        let active = [...domElement].filter((n) => n.style.display === \"block\");\r\n        let visibleIndex = [...domElement].findIndex((n) => n.style.display === \"block\");\r\n        let nextIndex = visibleIndex + active.length;\r\n\r\n        if (nextIndex < domElement.length) {\r\n            active[0].style.display = \"none\";\r\n            domElement[nextIndex].style.display = \"block\";\r\n        } else {\r\n            return;\r\n        }\r\n    };\r\n\r\n    const moveLeft = (domElement) => {\r\n        domElement = [...domElement].reverse();\r\n        moveRight(domElement);\r\n    };\r\n\r\n    body.addEventListener(\"click\", (e) => {\r\n        if (e.target.closest(\".benefits__arrow\")) {\r\n            if (e.target.closest(\".benefits__arrow--right\")) {\r\n                moveRight(benefitBlock);\r\n            } else {\r\n                moveLeft(benefitBlock);\r\n            }\r\n        }\r\n\r\n        if (e.target.closest(\".services__arrow\")) {\r\n            if (e.target.closest(\".services__arrow--right\")) {\r\n                moveRight(serviceBlock);\r\n            } else {\r\n                moveLeft(serviceBlock);\r\n            }\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst timer = (deadline, bodyClass) => {\r\n    const body = document.querySelector(bodyClass);\r\n    if (!body) {\r\n        return;\r\n    }\r\n    const days = body.querySelectorAll(\".count_1 span\");\r\n    const hours = body.querySelectorAll(\".count_2 span\");\r\n    const minutes = body.querySelectorAll(\".count_3 span\");\r\n    const seconds = body.querySelectorAll(\".count_4 span\");\r\n\r\n    const clock = () => {\r\n        const today = new Date().getTime();\r\n        const newDate = new Date(deadline).getTime();\r\n        //time in seconds\r\n        let diff = (newDate - today) / 1000;\r\n\r\n        //seconds without minutes\r\n        let diffS = Math.floor(diff % 60);\r\n        let diffM = Math.floor((diff / 60) % 60);\r\n        let diffH = Math.floor((diff / 60 / 60) % 24);\r\n        let diffD = Math.floor(diff / 60 / 60 / 24);\r\n\r\n        insertTime(days, diffD);\r\n        insertTime(hours, diffH);\r\n        insertTime(minutes, diffM);\r\n        insertTime(seconds, diffS);\r\n\r\n        let tick = setTimeout(clock, 1000);\r\n        if (diff < 0) {\r\n            clearTimeout(tick);\r\n            insertTime(days, \"0\");\r\n            insertTime(hours, \"0\");\r\n            insertTime(minutes, \"0\");\r\n            insertTime(seconds, \"0\");\r\n        }\r\n    };\r\n\r\n    const insertTime = (domElement, value) => {\r\n        domElement.forEach((element) => {\r\n            element.textContent = addZero(value);\r\n        });\r\n    };\r\n\r\n    const addZero = (i) => {\r\n        if (i < 10) {\r\n            i = \"0\" + i;\r\n        }\r\n        return i;\r\n    };\r\n\r\n    clock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/valid.js":
/*!**************************!*\
  !*** ./modules/valid.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst valid = () => {\r\n    const body = document.querySelector(\"body\");\r\n    const balkony = document.querySelector(\".balkony\");\r\n    const squareValue = balkony.querySelector(\"#calc-input\").value;\r\n\r\n    const validNumber = /[^0-9]+/i;\r\n\r\n    body.addEventListener(\"input\", (e) => {\r\n        if (e.target.matches(\"#calc-input\")) {\r\n            e.target.value = e.target.value.replace(validNumber, \"\");\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\r\n\n\n//# sourceURL=webpack:///./modules/valid.js?");

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