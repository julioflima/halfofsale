module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _translations_getInitialLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translations/getInitialLocale */ \"./src/translations/getInitialLocale.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/juloko/Desktop/Platiot/packages/web/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nconst Home = () => {\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    window.location.replace(`/${Object(_translations_getInitialLocale__WEBPACK_IMPORTED_MODULE_0__[\"getInitialLocale\"])()}`);\n  });\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"meta\", {\n    name: \"robots\",\n    content: \"noindex, nofollow\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImdldEluaXRpYWxMb2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLElBQWMsR0FBRyxNQUFNO0FBQzNCQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF5QixJQUFHQyx1RkFBZ0IsRUFBRyxFQUEvQztBQUNELEdBRlEsQ0FBVDtBQUlBLFNBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFvQixXQUFPLEVBQUMsbUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QsQ0FWRDs7QUFZZUwsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SW5pdGlhbExvY2FsZSB9IGZyb20gJy4uL3RyYW5zbGF0aW9ucy9nZXRJbml0aWFsTG9jYWxlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAvJHtnZXRJbml0aWFsTG9jYWxlKCl9YClcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4LCBub2ZvbGxvd1wiIC8+XG4gICAgPC9IZWFkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/translations/config.ts":
/*!************************************!*\
  !*** ./src/translations/config.ts ***!
  \************************************/
/*! exports provided: defaultLocale, locales, languageNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultLocale\", function() { return defaultLocale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"locales\", function() { return locales; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"languageNames\", function() { return languageNames; });\nconst defaultLocale = 'en';\nconst locales = ['en', 'pt'];\nconst languageNames = {\n  en: 'English',\n  pt: 'Portuguese'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNsYXRpb25zL2NvbmZpZy50cz82ZjdmIl0sIm5hbWVzIjpbImRlZmF1bHRMb2NhbGUiLCJsb2NhbGVzIiwibGFuZ3VhZ2VOYW1lcyIsImVuIiwicHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsYUFBYSxHQUFHLElBQXRCO0FBRUEsTUFBTUMsT0FBTyxHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBaEI7QUFFQSxNQUFNQyxhQUFhLEdBQUc7QUFDM0JDLElBQUUsRUFBRSxTQUR1QjtBQUUzQkMsSUFBRSxFQUFFO0FBRnVCLENBQXRCIiwiZmlsZSI6Ii4vc3JjL3RyYW5zbGF0aW9ucy9jb25maWcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZSA9ICdlbicgYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IGxvY2FsZXMgPSBbJ2VuJywgJ3B0J10gYXMgY29uc3RcblxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlTmFtZXMgPSB7XG4gIGVuOiAnRW5nbGlzaCcsXG4gIHB0OiAnUG9ydHVndWVzZScsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/translations/config.ts\n");

/***/ }),

/***/ "./src/translations/getInitialLocale.ts":
/*!**********************************************!*\
  !*** ./src/translations/getInitialLocale.ts ***!
  \**********************************************/
/*! exports provided: getInitialLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInitialLocale\", function() { return getInitialLocale; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/translations/config.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/translations/types.ts\");\n\n\nfunction getInitialLocale() {\n  const localSetting = localStorage.getItem('locale');\n\n  if (localSetting && Object(_types__WEBPACK_IMPORTED_MODULE_1__[\"isLocale\"])(localSetting)) {\n    return localSetting;\n  }\n\n  const [browserSetting] = navigator.language.split('-');\n\n  if (Object(_types__WEBPACK_IMPORTED_MODULE_1__[\"isLocale\"])(browserSetting)) {\n    return browserSetting;\n  }\n\n  return _config__WEBPACK_IMPORTED_MODULE_0__[\"defaultLocale\"];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNsYXRpb25zL2dldEluaXRpYWxMb2NhbGUudHM/ZGU3YiJdLCJuYW1lcyI6WyJnZXRJbml0aWFsTG9jYWxlIiwibG9jYWxTZXR0aW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlzTG9jYWxlIiwiYnJvd3NlclNldHRpbmciLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsInNwbGl0IiwiZGVmYXVsdExvY2FsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sU0FBU0EsZ0JBQVQsR0FBb0M7QUFDekMsUUFBTUMsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBckI7O0FBQ0EsTUFBSUYsWUFBWSxJQUFJRyx1REFBUSxDQUFDSCxZQUFELENBQTVCLEVBQTRDO0FBQzFDLFdBQU9BLFlBQVA7QUFDRDs7QUFFRCxRQUFNLENBQUNJLGNBQUQsSUFBbUJDLFNBQVMsQ0FBQ0MsUUFBVixDQUFtQkMsS0FBbkIsQ0FBeUIsR0FBekIsQ0FBekI7O0FBQ0EsTUFBSUosdURBQVEsQ0FBQ0MsY0FBRCxDQUFaLEVBQThCO0FBQzVCLFdBQU9BLGNBQVA7QUFDRDs7QUFFRCxTQUFPSSxxREFBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL3RyYW5zbGF0aW9ucy9nZXRJbml0aWFsTG9jYWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IHsgTG9jYWxlLCBpc0xvY2FsZSB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsTG9jYWxlKCk6IExvY2FsZSB7XG4gIGNvbnN0IGxvY2FsU2V0dGluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbGUnKVxuICBpZiAobG9jYWxTZXR0aW5nICYmIGlzTG9jYWxlKGxvY2FsU2V0dGluZykpIHtcbiAgICByZXR1cm4gbG9jYWxTZXR0aW5nXG4gIH1cblxuICBjb25zdCBbYnJvd3NlclNldHRpbmddID0gbmF2aWdhdG9yLmxhbmd1YWdlLnNwbGl0KCctJylcbiAgaWYgKGlzTG9jYWxlKGJyb3dzZXJTZXR0aW5nKSkge1xuICAgIHJldHVybiBicm93c2VyU2V0dGluZ1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRMb2NhbGVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/translations/getInitialLocale.ts\n");

/***/ }),

/***/ "./src/translations/types.ts":
/*!***********************************!*\
  !*** ./src/translations/types.ts ***!
  \***********************************/
/*! exports provided: isLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isLocale\", function() { return isLocale; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/translations/config.ts\");\n\nfunction isLocale(tested) {\n  return _config__WEBPACK_IMPORTED_MODULE_0__[\"locales\"].some(locale => locale === tested);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNsYXRpb25zL3R5cGVzLnRzPzg0NDUiXSwibmFtZXMiOlsiaXNMb2NhbGUiLCJ0ZXN0ZWQiLCJsb2NhbGVzIiwic29tZSIsImxvY2FsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQk8sU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBb0Q7QUFDekQsU0FBT0MsK0NBQU8sQ0FBQ0MsSUFBUixDQUFjQyxNQUFELElBQVlBLE1BQU0sS0FBS0gsTUFBcEMsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL3RyYW5zbGF0aW9ucy90eXBlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvY2FsZXMgfSBmcm9tICcuL2NvbmZpZydcblxuZXhwb3J0IHR5cGUgTG9jYWxlID0gdHlwZW9mIGxvY2FsZXNbbnVtYmVyXVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9ucyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBTdHJpbmdzID0ge1xuICBba2V5IGluIExvY2FsZV06IFRyYW5zbGF0aW9uc1xufVxuXG5leHBvcnQgdHlwZSBMb2NhbGl6YXRpb24gPSB7XG4gIGxvY2FsZTogTG9jYWxlXG4gIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25zXG4gIG5hbWVzcGFjZTogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsZSh0ZXN0ZWQ6IHN0cmluZyk6IHRlc3RlZCBpcyBMb2NhbGUge1xuICByZXR1cm4gbG9jYWxlcy5zb21lKChsb2NhbGUpID0+IGxvY2FsZSA9PT0gdGVzdGVkKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/translations/types.ts\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });