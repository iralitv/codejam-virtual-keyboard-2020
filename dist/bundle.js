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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ \"./src/js/keyboard.js\");\n\nvar myKeyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nmyKeyboard.init();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/createKeys.js":
/*!******************************!*\
  !*** ./src/js/createKeys.js ***!
  \******************************/
/*! exports provided: createKeys, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createKeys\", function() { return createKeys; });\n/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages */ \"./src/js/languages.js\");\n/* harmony import */ var _templateHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templateHelper */ \"./src/js/templateHelper.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar createKeys = function createKeys(keyLayout) {\n  var fragment = document.createDocumentFragment();\n  Object.entries(keyLayout).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n\n    var keyElement = Object(_templateHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      tagName: 'button',\n      classList: ['keyboard__key'],\n      attrs: {\n        type: 'button'\n      }\n    });\n\n    switch (key) {\n      case 'Backspace':\n        keyElement.innerHTML = \"<span>\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--wide');\n        break;\n\n      case 'Delete':\n        keyElement.innerHTML = \"<span>\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'CapsLock':\n        keyElement.innerHTML = \"<span>\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--wide');\n        break;\n\n      case 'ShiftLeft':\n        keyElement.innerHTML = \"<span>\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'Enter':\n        keyElement.innerHTML = \"<span>\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--wide');\n        break;\n\n      case 'ControlLeft':\n        keyElement.innerHTML = \"<span>\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'AltLeft':\n        keyElement.innerHTML = \"<span>\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'Space':\n        keyElement.innerHTML = \"<span>\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--extra-wide');\n        break;\n\n      case 'Tab':\n        keyElement.innerHTML = \"<span>\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'Lang':\n        keyElement.innerHTML = \"<span>\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'ArrowUp':\n        keyElement.innerHTML = \"<span class=\\\"arrow arrow-up\\\">\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'ArrowLeft':\n        keyElement.innerHTML = \"<span class=\\\"arrow arrow-left\\\">\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'ArrowRight':\n        keyElement.innerHTML = \"<span class=\\\"arrow arrow-right\\\">\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'ArrowDown':\n        keyElement.innerHTML = \"<span class=\\\"arrow arrow-down\\\">\".concat(value, \"</span>\");\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      default:\n        keyElement.textContent = value.toLowerCase();\n        break;\n    }\n\n    fragment.appendChild(keyElement);\n\n    if (Object(_languages__WEBPACK_IMPORTED_MODULE_0__[\"insertLineBreak\"])(value)) {\n      fragment.appendChild(document.createElement('br'));\n    }\n  });\n  return fragment;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (createKeys);\n\n//# sourceURL=webpack:///./src/js/createKeys.js?");

/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templateHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templateHelper */ \"./src/js/templateHelper.js\");\n/* harmony import */ var _createKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createKeys */ \"./src/js/createKeys.js\");\n/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages */ \"./src/js/languages.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Keyboard = /*#__PURE__*/function () {\n  function Keyboard() {\n    _classCallCheck(this, Keyboard);\n\n    this.elements = {\n      keyContainer: null,\n      keys: [],\n      textarea: null,\n      langSwitch: null\n    };\n    this.props = {\n      isCapsLock: false,\n      isShift: false,\n      language: localStorage.getItem('lang') || 'en'\n    };\n    this.keyLayout = _languages__WEBPACK_IMPORTED_MODULE_2__[\"languages\"][this.props.language];\n  }\n\n  _createClass(Keyboard, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.elements.textarea = Object(_templateHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: 'textarea',\n        classList: ['keyboard__field'],\n        attrs: {\n          rows: 8\n        }\n      });\n      this.elements.langSwitch = Object(_templateHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: 'p',\n        classList: ['keyboard__switch']\n      });\n      this.elements.langSwitch.innerText = 'For switch language use Shift + Alt';\n      this.elements.keyContainer = Object(_templateHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: 'section',\n        classList: ['keyboard__keys']\n      });\n      this.elements.keyContainer.appendChild(Object(_createKeys__WEBPACK_IMPORTED_MODULE_1__[\"createKeys\"])(this.keyLayout));\n      this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');\n      var fragment = document.createDocumentFragment();\n      fragment.appendChild(this.elements.textarea);\n      fragment.appendChild(this.elements.langSwitch);\n      fragment.appendChild(this.elements.keyContainer);\n      document.body.appendChild(fragment);\n      document.addEventListener('keydown', function (event) {\n        return _this.bindWithKeyboard(event);\n      });\n      document.addEventListener('keyup', function (event) {\n        return _this.removeActiveClass(event);\n      });\n      this.elements.keyContainer.addEventListener('mousedown', function (event) {\n        return _this.clickKeyboard(event);\n      });\n      this.elements.keyContainer.addEventListener('mouseup', function (event) {\n        return _this.removeActiveClass(event);\n      });\n    }\n  }, {\n    key: \"actionKeys\",\n    value: function actionKeys(key, value, event) {\n      switch (key) {\n        case 'Delete':\n        case 'Backspace':\n          this.elements.textarea.value = this.elements.textarea.value.substring(0, this.elements.textarea.value.length - 1);\n          break;\n\n        case 'CapsLock':\n          this.toggleCapsLock();\n          break;\n\n        case 'ShiftLeft':\n          this.props.isShift = true;\n          this.toggleCapsLock();\n          break;\n\n        case 'Enter':\n          this.elements.textarea.value += '\\n';\n          break;\n\n        case 'Space':\n          event.preventDefault();\n          this.elements.textarea.value += ' ';\n          break;\n\n        case 'Tab':\n          event.preventDefault();\n          this.elements.textarea.value += '\\t';\n          break;\n\n        case 'Lang':\n          this.toggleLanguage();\n          break;\n\n        case 'ControlLeft':\n        case 'AltLeft':\n        case 'ArrowUp':\n        case 'ArrowLeft':\n        case 'ArrowRight':\n        case 'ArrowDown':\n          event.preventDefault();\n          break;\n\n        default:\n          this.elements.textarea.value += this.props.isCapsLock ? value.toUpperCase() : value.toLowerCase();\n          break;\n      }\n    }\n  }, {\n    key: \"clickKeyboard\",\n    value: function clickKeyboard(event) {\n      var _this2 = this;\n\n      Object.entries(this.keyLayout).forEach(function (_ref) {\n        var _ref2 = _slicedToArray(_ref, 2),\n            key = _ref2[0],\n            value = _ref2[1];\n\n        if (event.target.textContent.toLowerCase() === value.toLowerCase()) {\n          _this2.actionKeys(key, value, event);\n        }\n      });\n      this.elements.keyContainer.removeEventListener('mousedown', function (e) {\n        return _this2.clickKeyboard(e);\n      });\n    }\n  }, {\n    key: \"bindWithKeyboard\",\n    value: function bindWithKeyboard(event) {\n      var _this3 = this;\n\n      this.elements.textarea.blur();\n      var keys = this.elements.keys;\n\n      if (event.altKey && event.shiftKey) {\n        this.toggleLanguage();\n      }\n\n      Object.entries(this.keyLayout).forEach(function (_ref3) {\n        var _ref4 = _slicedToArray(_ref3, 2),\n            key = _ref4[0],\n            value = _ref4[1];\n\n        if (event.code === key) {\n          keys.forEach(function (item) {\n            if (item.textContent.toLowerCase() === value.toLowerCase()) {\n              item.classList.add('keyboard__key--active');\n            }\n          });\n\n          _this3.actionKeys(key, value, event);\n        }\n      });\n      this.elements.keyContainer.removeEventListener('keydown', function (e) {\n        return _this3.bindWithKeyboard(e);\n      });\n    }\n  }, {\n    key: \"removeActiveClass\",\n    value: function removeActiveClass(event) {\n      var _this4 = this;\n\n      var keys = this.elements.keys;\n      keys.forEach(function (item) {\n        item.classList.remove('keyboard__key--active');\n      });\n\n      if (event.target.textContent === 'Shift') {\n        this.toggleCapsLock();\n        this.props.isShift = false;\n      }\n\n      if (event.code === 'ShiftLeft') {\n        this.toggleCapsLock();\n        this.props.isShift = false;\n      }\n\n      this.elements.keyContainer.removeEventListener('keyup', function (e) {\n        return _this4.removeActiveClass(e);\n      });\n      this.elements.keyContainer.removeEventListener('mouseup', function (e) {\n        return _this4.removeActiveClass(e);\n      });\n    }\n  }, {\n    key: \"toggleCapsLock\",\n    value: function toggleCapsLock() {\n      var keys = this.elements.keys;\n      this.props.isCapsLock = !this.props.isCapsLock;\n\n      for (var i = 0; i < keys.length; i += 1) {\n        if (keys[i].childElementCount === 0) {\n          keys[i].textContent = this.props.isCapsLock ? keys[i].textContent.toUpperCase() : keys[i].textContent.toLowerCase();\n        } else if (keys[i].textContent === 'CapsLock' && !this.props.isShift) {\n          keys[i].classList.toggle('keyboard__capslock--active', this.props.isCapsLock);\n        }\n      }\n    }\n  }, {\n    key: \"toggleLanguage\",\n    value: function toggleLanguage() {\n      this.props.language = this.props.language === 'en' ? 'ru' : 'en';\n      localStorage.setItem('lang', this.props.language);\n      this.keyLayout = _languages__WEBPACK_IMPORTED_MODULE_2__[\"languages\"][this.props.language];\n      this.elements.keyContainer.innerHTML = '';\n      this.elements.keyContainer.appendChild(Object(_createKeys__WEBPACK_IMPORTED_MODULE_1__[\"createKeys\"])(this.keyLayout));\n      this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');\n    }\n  }]);\n\n  return Keyboard;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keyboard);\n\n//# sourceURL=webpack:///./src/js/keyboard.js?");

/***/ }),

/***/ "./src/js/languages.js":
/*!*****************************!*\
  !*** ./src/js/languages.js ***!
  \*****************************/
/*! exports provided: languages, insertLineBreak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"languages\", function() { return languages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertLineBreak\", function() { return insertLineBreak; });\nvar engLang = {\n  Backquote: '`',\n  Digit1: '1',\n  Digit2: '2',\n  Digit3: '3',\n  Digit4: '4',\n  Digit5: '5',\n  Digit6: '6',\n  Digit7: '7',\n  Digit8: '8',\n  Digit9: '9',\n  Digit0: '0',\n  Minus: '-',\n  Equal: '=',\n  Backspace: 'Backspace',\n  Tab: 'Tab',\n  KeyQ: 'q',\n  KeyW: 'w',\n  KeyE: 'e',\n  KeyR: 'r',\n  KeyT: 't',\n  KeyY: 'y',\n  KeyU: 'u',\n  KeyI: 'i',\n  KeyO: 'o',\n  KeyP: 'p',\n  BracketLeft: '[',\n  BracketRight: ']',\n  Delete: 'Delete',\n  CapsLock: 'CapsLock',\n  KeyA: 'a',\n  KeyS: 's',\n  KeyD: 'd',\n  KeyF: 'f',\n  KeyG: 'g',\n  KeyH: 'h',\n  KeyJ: 'j',\n  KeyK: 'k',\n  KeyL: 'l',\n  Semicolon: ';',\n  Quote: '\\'',\n  Enter: 'Enter',\n  ShiftLeft: 'Shift',\n  KeyZ: 'z',\n  KeyX: 'x',\n  KeyC: 'c',\n  KeyV: 'v',\n  KeyB: 'b',\n  KeyN: 'n',\n  KeyM: 'm',\n  Comma: ',',\n  Period: '.',\n  Slash: '/',\n  ArrowUp: 'arrowUp',\n  ControlLeft: 'Ctrl',\n  Lang: 'Lang',\n  AltLeft: 'Alt',\n  Space: '#&32',\n  ArrowLeft: 'arrowLeft',\n  ArrowDown: 'arrowDown',\n  ArrowRight: 'arrowRight'\n};\nvar ruLang = {\n  Backquote: 'ё',\n  Digit1: '1',\n  Digit2: '2',\n  Digit3: '3',\n  Digit4: '4',\n  Digit5: '5',\n  Digit6: '6',\n  Digit7: '7',\n  Digit8: '8',\n  Digit9: '9',\n  Digit0: '0',\n  Minus: '-',\n  Equal: '=',\n  Backspace: 'Backspace',\n  Tab: 'Tab',\n  KeyQ: 'й',\n  KeyW: 'ц',\n  KeyE: 'у',\n  KeyR: 'к',\n  KeyT: 'е',\n  KeyY: 'н',\n  KeyU: 'г',\n  KeyI: 'ш',\n  KeyO: 'щ',\n  KeyP: 'з',\n  BracketLeft: 'х',\n  BracketRight: 'ъ',\n  Delete: 'Delete',\n  CapsLock: 'CapsLock',\n  KeyA: 'ф',\n  KeyS: 'ы',\n  KeyD: 'в',\n  KeyF: 'а',\n  KeyG: 'п',\n  KeyH: 'р',\n  KeyJ: 'о',\n  KeyK: 'л',\n  KeyL: 'д',\n  Semicolon: 'ж',\n  Quote: 'э',\n  Enter: 'Enter',\n  ShiftLeft: 'Shift',\n  KeyZ: 'я',\n  KeyX: 'ч',\n  KeyC: 'с',\n  KeyV: 'м',\n  KeyB: 'и',\n  KeyN: 'т',\n  KeyM: 'ь',\n  Comma: 'б',\n  Period: 'ю',\n  Slash: '.',\n  ArrowUp: 'arrowUp',\n  ControlLeft: 'Ctrl',\n  Lang: 'Язык',\n  AltLeft: 'Alt',\n  Space: '#&32',\n  ArrowLeft: 'arrowLeft',\n  ArrowDown: 'arrowDown',\n  ArrowRight: 'arrowRight'\n};\nvar languages = {\n  en: engLang,\n  ru: ruLang\n};\n\nvar insertLineBreak = function insertLineBreak(key) {\n  return ['Backspace', 'Delete', 'Enter', 'arrowUp'].includes(key);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/languages.js?");

/***/ }),

/***/ "./src/js/templateHelper.js":
/*!**********************************!*\
  !*** ./src/js/templateHelper.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar builtHtmlElement = function builtHtmlElement(_ref) {\n  var _newElement$classList;\n\n  var tagName = _ref.tagName,\n      _ref$classList = _ref.classList,\n      classList = _ref$classList === void 0 ? [] : _ref$classList,\n      _ref$attrs = _ref.attrs,\n      attrs = _ref$attrs === void 0 ? {} : _ref$attrs;\n  var newElement = document.createElement(tagName);\n\n  (_newElement$classList = newElement.classList).add.apply(_newElement$classList, _toConsumableArray(classList));\n\n  Object.keys(attrs).forEach(function (key) {\n    return newElement.setAttribute(key, attrs[key]);\n  });\n  return newElement;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (builtHtmlElement);\n\n//# sourceURL=webpack:///./src/js/templateHelper.js?");

/***/ })

/******/ });