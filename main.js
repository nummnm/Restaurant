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

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\r\n  const content = document.querySelector(\"#content\");\r\n\r\n  const heading = document.createElement(\"h1\");\r\n  heading.textContent = \"Contact Us\";\r\n\r\n  const address = document.createElement(\"p\");\r\n  address.textContent = \"123 Main Street, Your City\";\r\n\r\n  const phone = document.createElement(\"p\");\r\n  phone.textContent = \"Phone: 555-123-4567\";\r\n\r\n  const email = document.createElement(\"p\");\r\n  email.textContent = \"Email: hello@myrestaurant.com\";\r\n\r\n  content.appendChild(heading);\r\n  content.appendChild(address);\r\n  content.appendChild(phone);\r\n  content.appendChild(email);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcz83ZTUzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xyXG5cclxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTIzIE1haW4gU3RyZWV0LCBZb3VyIENpdHlcIjtcclxuXHJcbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmU6IDU1NS0xMjMtNDU2N1wiO1xyXG5cclxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGVtYWlsLnRleHRDb250ZW50ID0gXCJFbWFpbDogaGVsbG9AbXlyZXN0YXVyYW50LmNvbVwiO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChwaG9uZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChlbWFpbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contact.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\n\r\nconst homeButton = document.querySelector(\"#home-btn\");\r\nconst menuButton = document.querySelector(\"#menu-btn\");\r\nconst contactButton = document.querySelector(\"#contact-btn\");\r\n\r\nfunction clearContent() {\r\n  content.innerHTML = \"\";\r\n}\r\n\r\nhomeButton.addEventListener(\"click\", () => {\r\n  clearContent();\r\n  (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\nmenuButton.addEventListener(\"click\", () => {\r\n  clearContent();\r\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\ncontactButton.addEventListener(\"click\", () => {\r\n  clearContent();\r\n  (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFxQztBQUNKO0FBQ007QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFRO0FBQ1YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVE7QUFDVixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBVztBQUNiLENBQUM7QUFDRDtBQUNBLHdEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcz8xNDljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9wYWdlTG9hZC5qc1wiO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWUtYnRuXCIpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ0blwiKTtcclxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1idG5cIik7XHJcblxyXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcblxyXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJDb250ZW50KCk7XHJcbiAgbG9hZEhvbWUoKTtcclxufSk7XHJcblxyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJDb250ZW50KCk7XHJcbiAgbG9hZE1lbnUoKTtcclxufSk7XHJcblxyXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJDb250ZW50KCk7XHJcbiAgbG9hZENvbnRhY3QoKTtcclxufSk7XHJcblxyXG5sb2FkSG9tZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\r\n  const content = document.querySelector(\"#content\");\r\n\r\n  const heading = document.createElement(\"h1\");\r\n  heading.textContent = \"Our Menu\";\r\n\r\n  const item1 = document.createElement(\"p\");\r\n  item1.textContent = \"Classic Burger — $10\";\r\n\r\n  const item2 = document.createElement(\"p\");\r\n  item2.textContent = \"Margherita Pizza — $12\";\r\n\r\n  const item3 = document.createElement(\"p\");\r\n  item3.textContent = \"Chocolate Ice Cream — $5\";\r\n\r\n  content.appendChild(heading);\r\n  content.appendChild(item1);\r\n  content.appendChild(item2);\r\n  content.appendChild(item3);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcz80NmMxIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcclxuXHJcbiAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpdGVtMS50ZXh0Q29udGVudCA9IFwiQ2xhc3NpYyBCdXJnZXIg4oCUICQxMFwiO1xyXG5cclxuICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGl0ZW0yLnRleHRDb250ZW50ID0gXCJNYXJnaGVyaXRhIFBpenphIOKAlCAkMTJcIjtcclxuXHJcbiAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpdGVtMy50ZXh0Q29udGVudCA9IFwiQ2hvY29sYXRlIEljZSBDcmVhbSDigJQgJDVcIjtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0xKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0yKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0zKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ },

/***/ "./src/pageLoad.js"
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\r\n  const content = document.querySelector(\"#content\");\r\n\r\n  const heading = document.createElement(\"h1\");\r\n  heading.textContent = \"Welcome to My Restaurant\";\r\n\r\n  const paragraph = document.createElement(\"p\");\r\n  paragraph.textContent =\r\n    \"The finest food in town, made with fresh ingredients and a whole lot of love.\";\r\n\r\n  content.appendChild(heading);\r\n  content.appendChild(paragraph);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlTG9hZC5qcz9kZTk0Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBNeSBSZXN0YXVyYW50XCI7XHJcblxyXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9XHJcbiAgICBcIlRoZSBmaW5lc3QgZm9vZCBpbiB0b3duLCBtYWRlIHdpdGggZnJlc2ggaW5ncmVkaWVudHMgYW5kIGEgd2hvbGUgbG90IG9mIGxvdmUuXCI7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pageLoad.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;