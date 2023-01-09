/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction toggleSidebar() {\n    document.getElementById(\"sidebar\").classList.toggle('active');\n}\n\ndocument.getElementById('toggle-btn').onclick = toggleSidebar;\n\nvar slideIndex = 1;\n\nfunction showSlides(n) {\n    var i = void 0;\n    var slides = document.getElementsByClassName(\"slider__slides\");\n    var dots = document.getElementsByClassName(\"slider__dot\");\n    if (n > slides.length) {\n        slideIndex = 1;\n    }\n    if (n < 1) {\n        slideIndex = slides.length;\n    }\n    for (i = 0; i < slides.length; i++) {\n        slides[i].style.display = \"none\";\n    }\n    for (i = 0; i < dots.length; i++) {\n        dots[i].className = dots[i].className.replace(\" active\", \"\");\n    }\n    slides[slideIndex - 1].style.display = \"block\";\n    dots[slideIndex - 1].className += \" active\";\n}\n\nshowSlides(slideIndex);\n\n// Next/previous controls\nfunction plusSlides(n) {\n    showSlides(slideIndex += n);\n}\n\n// Thumbnail image controls\nfunction currentSlide(n) {\n    showSlides(slideIndex = n);\n}\ndocument.getElementById('arrowPrew').onclick = function () {\n    plusSlides(-1);\n};\ndocument.getElementById('arrowNext').onclick = function () {\n    plusSlides(1);\n};\ndocument.getElementById('slide1').onclick = function () {\n    currentSlide(1);\n};\ndocument.getElementById('slide2').onclick = function () {\n    currentSlide(2);\n};\ndocument.getElementById('slide3').onclick = function () {\n    currentSlide(3);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIikuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtYnRuJykub25jbGljayA9IHRvZ2dsZVNpZGViYXI7XHJcblxyXG5cclxuXHJcbmxldCBzbGlkZUluZGV4ID0gMTtcclxuXHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMobikge1xyXG4gICAgbGV0IGk7XHJcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2xpZGVyX19zbGlkZXNcIik7XHJcbiAgICBjb25zdCBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNsaWRlcl9fZG90XCIpO1xyXG4gICAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoKSB7IHNsaWRlSW5kZXggPSAxIH1cclxuICAgIGlmIChuIDwgMSkgeyBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCB9XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGRvdHNbc2xpZGVJbmRleCAtIDFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxufVxyXG5cclxuXHJcbnNob3dTbGlkZXMoc2xpZGVJbmRleCk7XHJcblxyXG4vLyBOZXh0L3ByZXZpb3VzIGNvbnRyb2xzXHJcbmZ1bmN0aW9uIHBsdXNTbGlkZXMobikge1xyXG4gICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IG4pO1xyXG59XHJcblxyXG4vLyBUaHVtYm5haWwgaW1hZ2UgY29udHJvbHNcclxuZnVuY3Rpb24gY3VycmVudFNsaWRlKG4pIHtcclxuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCA9IG4pO1xyXG59XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvd1ByZXcnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7IHBsdXNTbGlkZXMoLTEpIH07XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvd05leHQnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7IHBsdXNTbGlkZXMoMSkgfTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlMScpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHsgY3VycmVudFNsaWRlKDEpIH07XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZTInKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7IGN1cnJlbnRTbGlkZSgyKSB9O1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGUzJykub25jbGljayA9IGZ1bmN0aW9uKCkgeyBjdXJyZW50U2xpZGUoMykgfTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });