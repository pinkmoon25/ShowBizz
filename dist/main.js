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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --primary-color: #639;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  background-color: rgba(0, 0, 0, 0.95);\\r\\n  color: #fff;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  max-width: 100vw;\\r\\n  background-color: var(--primary-color);\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  gap: 24px;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nli a {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.active-nav {\\r\\n  border-bottom: 3px solid aqua;\\r\\n}\\r\\n\\r\\nfooter a {\\r\\n  color: black;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\nli a:hover {\\r\\n  color: #9f9f9d;\\r\\n}\\r\\n\\r\\n/* style the shows sections */\\r\\n.shows-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\\r\\n  place-items: center;\\r\\n}\\r\\n\\r\\nbutton,\\r\\nimg {\\r\\n  cursor: pointer;\\r\\n  transition: all 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\n/* Loading api animation */\\r\\n.loaderContainer {\\r\\n  width: 100%;\\r\\n  height: 500px;\\r\\n}\\r\\n\\r\\n#loader {\\r\\n  position: absolute;\\r\\n  top: calc(50% - 20px);\\r\\n  left: calc(50% - 20px);\\r\\n}\\r\\n\\r\\n@keyframes loader {\\r\\n  0% { left: -100px; }\\r\\n  100% { left: 110%; }\\r\\n}\\r\\n\\r\\n#box {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  background: rebeccapurple;\\r\\n  animation: animate 0.5s linear infinite;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n@keyframes animate {\\r\\n  17% { border-bottom-right-radius: 3px; }\\r\\n  25% { transform: translateY(9px) rotate(22.5deg); }\\r\\n\\r\\n  50% {\\r\\n    transform: translateY(18px) scale(1, 0.9) rotate(45deg);\\r\\n    border-bottom-right-radius: 40px;\\r\\n  }\\r\\n  75% { transform: translateY(9px) rotate(67.5deg); }\\r\\n  100% { transform: translateY(0) rotate(90deg); }\\r\\n}\\r\\n\\r\\n#shadow {\\r\\n  width: 50px;\\r\\n  height: 5px;\\r\\n  background: #fdfdfd;\\r\\n  opacity: 0.1;\\r\\n  position: absolute;\\r\\n  top: 59px;\\r\\n  left: 0;\\r\\n  border-radius: 50%;\\r\\n  animation: shadow 0.5s linear infinite;\\r\\n}\\r\\n\\r\\n@keyframes shadow {\\r\\n  50% {\\r\\n    transform: scale(1.2, 1);\\r\\n  }\\r\\n}\\r\\n\\r\\nfigure a img:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.popup-img {\\r\\n  width: 100%;\\r\\n  padding-bottom: 12px;\\r\\n  border-radius: 4px;\\r\\n  transition: all 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\na > .popup-img:hover {\\r\\n  transform: scale(0.96);\\r\\n}\\r\\n\\r\\nfigcaption {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.like-symbol {\\r\\n  font-size: 30px;\\r\\n  font-weight: 600;\\r\\n  color: #f00;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment-btn-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.comment-btn-container > button {\\r\\n  border: none;\\r\\n  border-radius: 3px;\\r\\n  padding: 5px 8px;\\r\\n  font-size: 16px;\\r\\n  font-weight: 600;\\r\\n  color: #fff;\\r\\n  background-color: rgb(102, 51, 153);\\r\\n}\\r\\n\\r\\n.comment-btn-container > button:hover {\\r\\n  transition: all 0.3s ease-in-out;\\r\\n  background-color: #fff;\\r\\n  color: #639;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  background-color: rgba(0, 0, 0, 0.9);\\r\\n}\\r\\n\\r\\n.hide-modal {\\r\\n  z-index: -1;\\r\\n  opacity: 0;\\r\\n  transform: scale(0);\\r\\n  animation: hide 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\n@keyframes hide {\\r\\n  from {\\r\\n    z-index: 2;\\r\\n    transform: scale(1);\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    z-index: -1;\\r\\n    transform: scale(0);\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.show-modal {\\r\\n  z-index: 1;\\r\\n  opacity: 1;\\r\\n  transform: scale(1);\\r\\n  animation: show 0.3s ease;\\r\\n}\\r\\n\\r\\n@keyframes show {\\r\\n  from {\\r\\n    z-index: -1;\\r\\n    transform: scale(0);\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    z-index: 2;\\r\\n    transform: scale(1);\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n.popup-container {\\r\\n  margin-bottom: 24px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.close-popup {\\r\\n  margin: 25px 25px 0 0;\\r\\n  align-self: end;\\r\\n  font-size: 25px;\\r\\n  font-weight: 600;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  color: #fff;\\r\\n  background-color: rgb(161, 0, 0);\\r\\n  transition: all 0.3s ease-in-out;\\r\\n}\\r\\n\\r\\n.close-popup:hover {\\r\\n  transform: scale(1.2) rotate(360deg);\\r\\n}\\r\\n\\r\\n.popup-container > figure {\\r\\n  width: 90%;\\r\\n  margin-bottom: 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  max-width: 800px;\\r\\n}\\r\\n\\r\\n.popup-details {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  margin: 0;\\r\\n  order: -1;\\r\\n  color: cornflowerblue;\\r\\n  font-size: 24px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.show-details {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  flex-wrap: wrap;\\r\\n  font-weight: 700;\\r\\n  color: cornflowerblue;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: var(--primary-color);\\r\\n  color: white;\\r\\n  margin-top: 25px;\\r\\n  max-width: 100vw;\\r\\n  padding: 20px 0;\\r\\n  text-align: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/config/involvement.js":
/*!***********************************!*\
  !*** ./src/config/involvement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vXi1DzMj9owMIWXkHLrJ/likes';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesApi);\n\n//# sourceURL=webpack://webpack/./src/config/involvement.js?");

/***/ }),

/***/ "./src/config/showsAPI.js":
/*!********************************!*\
  !*** ./src/config/showsAPI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showApiUrl = 'https://api.tvmaze.com/shows';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showApiUrl);\n\n//# sourceURL=webpack://webpack/./src/config/showsAPI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _config_showsAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/showsAPI */ \"./src/config/showsAPI.js\");\n/* harmony import */ var _config_involvement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/involvement */ \"./src/config/involvement.js\");\n/* harmony import */ var _interact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interact */ \"./src/interact.js\");\n\n\n\n\n\nconst modalSection = document.querySelector('.modal');\nconst body = document.querySelector('body');\n\n// create popup\nconst renderPopup = async (i) => {\n  const show = await (0,_interact__WEBPACK_IMPORTED_MODULE_3__.getApiData)(_config_showsAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  modalSection.innerHTML = '';\n  const popupContainer = document.createElement('div');\n  const closeBtn = document.createElement('button');\n  const popupFig = document.createElement('figure');\n  const popupShowLink = document.createElement('a');\n  const popupImage = document.createElement('img');\n  const figcaption = document.createElement('figcaption');\n  const popupShowTitle = document.createElement('h3');\n  const showDetails = document.createElement('div');\n  const genre = document.createElement('span');\n  const rating = document.createElement('span');\n  const premiered = document.createElement('span');\n\n  popupContainer.classList.add('popup-container');\n  closeBtn.classList.add('close-popup');\n  figcaption.classList.add('popup-details');\n  popupImage.classList.add('popup-img');\n  showDetails.classList.add('show-details');\n\n  popupImage.setAttribute('src', show[i].image.original);\n  popupImage.setAttribute('alt', `${show[i].name} image`);\n  popupShowLink.setAttribute('href', show[i].url);\n  popupShowLink.setAttribute('target', '_blank');\n\n  closeBtn.innerHTML = '&times;';\n  popupShowTitle.innerHTML = show[i].name;\n  figcaption.innerHTML = show[i].summary;\n  genre.innerHTML = `Genres: ${show[i].genres.join(', ')}`;\n  rating.innerHTML = `Rating: ${show[i].rating.average}`;\n  premiered.innerHTML = `premiered: ${show[i].premiered}`;\n\n  figcaption.appendChild(popupShowTitle);\n  popupShowLink.appendChild(popupImage);\n  popupFig.appendChild(popupShowLink);\n  popupFig.appendChild(figcaption);\n  showDetails.appendChild(genre);\n  showDetails.appendChild(rating);\n  showDetails.appendChild(premiered);\n  popupContainer.appendChild(closeBtn);\n  popupContainer.appendChild(popupFig);\n  popupContainer.appendChild(showDetails);\n\n  modalSection.appendChild(popupContainer);\n  closeBtn.addEventListener('click', () => {\n    modalSection.classList.remove('show-modal');\n    modalSection.classList.add('hide-modal');\n    body.style.overflowY = 'auto';\n  });\n};\n\n// create show List\n\nconst renderShows = async () => {\n  const shows = await (0,_interact__WEBPACK_IMPORTED_MODULE_3__.getApiData)(_config_showsAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  const showSection = document.querySelector('.shows-container');\n  shows.length = 20;\n  document.querySelector('.loaderContainer').remove();\n  shows.forEach((show, index) => {\n    const symbolContainer = document.createElement('span');\n    const likesContainer = document.createElement('span');\n    const showContainer = document.createElement('div');\n    const commentBtnContainer = document.createElement('div');\n    const commentBtn = document.createElement('button');\n    const showLink = document.createElement('a');\n    const showImage = document.createElement('img');\n    const fig = document.createElement('figure');\n    const figcaption = document.createElement('figcaption');\n    const p = document.createElement('p');\n\n    showContainer.classList.add('show-container');\n    symbolContainer.classList.add('like-symbol');\n    likesContainer.classList.add('likes-count');\n    commentBtnContainer.classList.add('comment-btn-container');\n\n    likesContainer.setAttribute('data-id', `showId${show.id}`);\n    symbolContainer.setAttribute('title', 'like');\n    showImage.setAttribute('src', show.image.medium);\n    showImage.setAttribute('alt', `${show.name} image`);\n    showLink.setAttribute('href', show.url);\n    showLink.setAttribute('target', '_blank');\n\n    p.innerText = `${show.name}`;\n    symbolContainer.innerHTML = '&#9825';\n    commentBtn.textContent = 'comments';\n    commentBtn.addEventListener('click', () => {\n      modalSection.classList.remove('hide-modal');\n      modalSection.classList.add('show-modal');\n      body.style.overflowY = 'hidden';\n      renderPopup(index);\n    });\n\n    symbolContainer.addEventListener('click', () => {\n      let likeContainer = symbolContainer.nextSibling;\n      // unlike show and stop updating it on the source api\n      if (symbolContainer.innerHTML === '❤') {\n        likeContainer.innerHTML = Number(likeContainer.innerHTML) - 1;\n        symbolContainer.innerHTML = '&#9825';\n        return;\n      }\n      symbolContainer.innerHTML = '&#10084;';\n\n      likeContainer.innerHTML = Number(likeContainer.innerHTML) + 1;\n      likeContainer = likeContainer.getAttribute('data-id');\n      const data = {\n        item_id: likeContainer,\n      };\n      (0,_interact__WEBPACK_IMPORTED_MODULE_3__.postData)(data, _config_involvement__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    });\n\n    figcaption.appendChild(p);\n    figcaption.appendChild(symbolContainer);\n    figcaption.appendChild(likesContainer);\n    showLink.appendChild(showImage);\n    fig.appendChild(showLink);\n    fig.appendChild(figcaption);\n    commentBtnContainer.appendChild(commentBtn);\n    showContainer.appendChild(fig);\n    showContainer.appendChild(commentBtnContainer);\n\n    showSection.appendChild(showContainer);\n  });\n};\n\nconst renderLikes = async () => {\n  const likes = await (0,_interact__WEBPACK_IMPORTED_MODULE_3__.getApiData)(_config_involvement__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  likes.forEach((like, index) => {\n    const likeContainer = document.querySelector(`[data-id = '${like.item_id}']`);\n    if (index < 19) {\n      likeContainer.innerHTML = like.likes;\n    }\n  });\n};\n\nrenderShows();\n\n// render likes after DOM content have been loaded\ndocument.addEventListener('DOMContentLoaded', () => {\n  renderLikes();\n});\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/interact.js":
/*!*************************!*\
  !*** ./src/interact.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApiData\": () => (/* binding */ getApiData),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst postData = async (data, api) => {\n  const req = fetch(api, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json;charset=utf-8',\n    },\n    body: JSON.stringify(data),\n  });\n  try {\n    await req.reject(new Error(`HTTP - ERROR${(await req).status}`));\n  } catch (error) {\n    console.error(error); //  eslint-disable-line\n  }\n};\n\n// get shows from API source function\nconst getApiData = async (showApiUrl) => {\n  const res = await fetch(showApiUrl);\n  const result = await res.json();\n  return result;\n};\n\n\n\n\n//# sourceURL=webpack://webpack/./src/interact.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;