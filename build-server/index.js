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

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_Menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _src_assets_recipes_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/assets/recipes.json */ \"./src/assets/recipes.json\");\n\n\n\n\n//import ReactDOMServer from \"react-dom/server\";\n\n\n //data - данные json\n\nconst PORT = process.env.PORT || 4000;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get(\"/\", (req, res) => {\n  const app = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src_Menu_js__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n    recipes: _src_assets_recipes_json__WEBPACK_IMPORTED_MODULE_6__,\n    title: \"HTML-\\u0434\\u043E\\u043A\\u0443\\u043C\\u0435\\u043D\\u0442 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D \\u043E\\u0442 \\u0441\\u0435\\u0440\\u0432\\u0435\\u0440\\u0430\"\n  }));\n  console.log('--app', app);\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./build/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, \"utf8\", (err, data) => {\n    if (err) {\n      console.log(err);\n      return res.status(500).send(\"Ошибка!\");\n    }\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div> <script>alert('HTML-ДОКУМЕНТ ПОЛУЧЕН ОТ СЕРВЕРА И СОДЕРЖИТ СЛЕДУЮЩИЕ ДАННЫЕ: ${JSON.stringify(_src_assets_recipes_json__WEBPACK_IMPORTED_MODULE_6__)}')</script>`));\n  });\n}); // конец функции app.get\n\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default()[\"static\"](\"./build\"));\napp.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));\n\n//# sourceURL=webpack://my_recipes/./server/index.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction Recipe(_ref) {\n  let {\n    name,\n    ingredients,\n    steps\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    id: name.toLowerCase().replace(/ /g, \"-\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"ingredients\"\n  }, ingredients.map((ingredient, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    key: i\n  }, ingredient.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    className: \"instructions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Cooking Instructions\"), steps.map((step, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    key: i\n  }, step))));\n}\nfunction Menu(_ref2) {\n  let {\n    recipes,\n    title\n  } = _ref2;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"article\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"recipes\"\n  }, recipes?.map((recipe, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Recipe, _extends({\n    key: i\n  }, recipe)))));\n}\n\n//# sourceURL=webpack://my_recipes/./src/Menu.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./src/assets/recipes.json":
/*!*********************************!*\
  !*** ./src/assets/recipes.json ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"name\":\"Baked Salmon\",\"ingredients\":[{\"name\":\"Salmon\",\"amount\":1,\"measurement\":\"l lb\"},{\"name\":\"Pine Nuts\",\"amount\":1,\"measurement\":\"cup\"},{\"name\":\"Butter Lettuce\",\"amount\":2,\"measurement\":\"cups\"},{\"name\":\"Yellow Tail Squash\",\"amount\":1,\"measurement\":\"med\"},{\"name\":\"Olive Oil\",\"amount\":0.5,\"measurement\":\"cup\"},{\"name\":\"Garlic\",\"amount\":3,\"measurement\":\"cloves\"}],\"steps\":[\"Preheat the oven to 350 degrees.\",\"Spread the olive oil around a glass baking dish.\",\"Add the salmon, Garlic, and pine nuts to the dish\",\"Bake for 15 minutes.\",\"Add the Butternut Squash and put back in the oven for 30 mins.\",\"Remove from oven and let cool for 15 minutes. Add the lettuce and serve.\"]},{\"name\":\"Fish Tacos\",\"ingredients\":[{\"name\":\"Whitefish\",\"amount\":1,\"measurement\":\"l lb\"},{\"name\":\"cheese\",\"amount\":1,\"measurement\":\"cup\"},{\"name\":\"Iceberg Lettuce\",\"amount\":2,\"measurement\":\"cups\"},{\"name\":\"Tomatoes\",\"amount\":2,\"measurement\":\"large\"},{\"name\":\"Tortillas\",\"amount\":3,\"measurement\":\"med\"}],\"steps\":[\"Cook the Fish on the Grill until Hot\",\"Place the fish on the 3 tortillas\",\"Top them with lettuce, tomatoes, and cheese\"]}]');\n\n//# sourceURL=webpack://my_recipes/./src/assets/recipes.json?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;