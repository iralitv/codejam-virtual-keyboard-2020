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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createKeys\", function() { return createKeys; });\n/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages */ \"./src/js/languages.js\");\n/* harmony import */ var _templateHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templateHelper */ \"./src/js/templateHelper.js\");\n\n\nvar createKeys = function createKeys(language) {\n  var fragment = document.createDocumentFragment();\n  _languages__WEBPACK_IMPORTED_MODULE_0__[\"languages\"][language].forEach(function (key) {\n    var keyElement = Object(_templateHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      tagName: 'button',\n      classList: ['keyboard__key'],\n      attrs: {\n        type: 'button'\n      }\n    });\n\n    switch (key) {\n      case 'Backspace':\n        keyElement.innerHTML = '<span>Backspace</span>';\n        keyElement.classList.add('keyboard__key--wide');\n        break;\n\n      case 'Delete':\n        keyElement.innerHTML = '<span>Delete</span>';\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'CapsLock':\n        keyElement.innerHTML = '<span>CapsLock</span>';\n        keyElement.classList.add('keyboard__key--wide');\n        break;\n\n      case 'Shift':\n        keyElement.innerHTML = '<span>Shift</span>';\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'Enter':\n        keyElement.innerHTML = '<span>Enter</span>';\n        keyElement.classList.add('keyboard__key--wide');\n        break;\n\n      case 'Control':\n        keyElement.innerHTML = '<span>Control</span>';\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'Alt':\n        keyElement.innerHTML = '<span>Alt</span>';\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'space':\n        keyElement.innerHTML = '<span>&#32</span>';\n        keyElement.classList.add('keyboard__key--extra-wide');\n        break;\n\n      case 'Tab':\n        keyElement.innerHTML = '<span>Tab</span>';\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'language':\n        keyElement.innerHTML = '<span>lang</span>';\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'up':\n        keyElement.innerHTML = '<span class=\"arrow arrow-up\">ArrowUp</span>';\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'left':\n        keyElement.innerHTML = '<span class=\"arrow arrow-left\">ArrowLeft</span>';\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'right':\n        keyElement.innerHTML = '<span class=\"arrow arrow-right\">ArrowRight</span>';\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      case 'down':\n        keyElement.innerHTML = '<span class=\"arrow arrow-down\">ArrowDown</span>';\n        keyElement.classList.add('keyboard__key--medium');\n        break;\n\n      default:\n        keyElement.textContent = key.toLowerCase();\n        break;\n    }\n\n    fragment.appendChild(keyElement);\n\n    if (Object(_languages__WEBPACK_IMPORTED_MODULE_0__[\"insertLineBreak\"])(key)) {\n      fragment.appendChild(document.createElement('br'));\n    }\n  });\n  return fragment;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (createKeys);\n\n//# sourceURL=webpack:///./src/js/createKeys.js?");

/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templateHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templateHelper */ \"./src/js/templateHelper.js\");\n/* harmony import */ var _createKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createKeys */ \"./src/js/createKeys.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Keyboard = /*#__PURE__*/function () {\n  function Keyboard() {\n    _classCallCheck(this, Keyboard);\n\n    this.elements = {\n      keyContainer: null,\n      keys: [],\n      textarea: null,\n      langSwitch: null\n    };\n    this.props = {\n      capsLock: false,\n      language: localStorage.getItem('lang') || 'en'\n    };\n  }\n\n  _createClass(Keyboard, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.elements.textarea = Object(_templateHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: 'textarea',\n        classList: ['keyboard__field'],\n        attrs: {\n          rows: 8\n        }\n      });\n      this.elements.langSwitch = Object(_templateHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: 'p',\n        classList: ['keyboard__switch']\n      });\n      this.elements.langSwitch.innerText = 'For switch language use Shift + Alt';\n      this.elements.keyContainer = Object(_templateHelper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tagName: 'section',\n        classList: ['keyboard__keys']\n      });\n      this.elements.keyContainer.appendChild(Object(_createKeys__WEBPACK_IMPORTED_MODULE_1__[\"createKeys\"])(this.props.language));\n      this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');\n      document.body.appendChild(this.elements.textarea);\n      document.body.appendChild(this.elements.langSwitch);\n      document.body.appendChild(this.elements.keyContainer);\n      document.addEventListener('keydown', function (event) {\n        return _this.bindWithKeyboard(event);\n      });\n      document.addEventListener('keyup', function (event) {\n        return _this.removeActiveClass(event);\n      });\n      this.elements.keyContainer.addEventListener('mousedown', function (event) {\n        return _this.clickKeyboard(event);\n      });\n      this.elements.keyContainer.addEventListener('mouseup', function (event) {\n        return _this.removeActiveClass(event);\n      });\n    }\n  }, {\n    key: \"actionKeys\",\n    value: function actionKeys(key, event) {\n      switch (key.textContent) {\n        case 'Delete':\n        case 'Backspace':\n          this.elements.textarea.value = this.elements.textarea.value.substring(0, this.elements.textarea.value.length - 1);\n          break;\n\n        case 'CapsLock':\n          this.toggleCapsLock();\n          key.classList.toggle('keyboard__capslock--active', this.props.capsLock);\n          break;\n\n        case 'Shift':\n          this.toggleCapsLock();\n          break;\n\n        case 'Enter':\n          this.elements.textarea.value += '\\n';\n          break;\n\n        case ' ':\n          this.elements.textarea.value += ' ';\n          break;\n\n        case 'Tab':\n          event.preventDefault();\n          this.elements.textarea.value += '\\t';\n          break;\n\n        case 'lang':\n          this.toggleLanguage();\n          break;\n\n        case 'Control':\n        case 'Alt':\n        case 'ArrowUp':\n        case 'ArrowLeft':\n        case 'ArrowRight':\n        case 'ArrowDown':\n          break;\n\n        default:\n          this.elements.textarea.value += key.textContent;\n          break;\n      }\n    }\n  }, {\n    key: \"bindWithKeyboard\",\n    value: function bindWithKeyboard(event) {\n      var _this2 = this;\n\n      var keys = this.elements.keys;\n\n      for (var i = 0; i < keys.length; i += 1) {\n        if (event.key === keys[i].textContent) {\n          keys[i].classList.add('keyboard__key--active');\n\n          if (event.altKey && event.shiftKey) {\n            this.toggleLanguage();\n          }\n\n          this.actionKeys(keys[i], event);\n          break;\n        }\n      }\n\n      this.elements.keyContainer.removeEventListener('keydown', function (e) {\n        return _this2.bindWithKeyboard(e);\n      });\n    }\n  }, {\n    key: \"clickKeyboard\",\n    value: function clickKeyboard(event) {\n      var _this3 = this;\n\n      var keys = this.elements.keys;\n\n      for (var i = 0; i < keys.length; i += 1) {\n        if (event.target.textContent === keys[i].textContent) {\n          this.actionKeys(keys[i], event);\n          break;\n        }\n      }\n\n      this.elements.keyContainer.removeEventListener('mousedown', function (e) {\n        return _this3.clickKeyboard(e);\n      });\n    }\n  }, {\n    key: \"removeActiveClass\",\n    value: function removeActiveClass(event) {\n      var _this4 = this;\n\n      var keys = this.elements.keys;\n      keys.forEach(function (item) {\n        if (event.key === item.textContent) {\n          item.classList.remove('keyboard__key--active');\n\n          if (event.key === 'Shift') {\n            _this4.toggleCapsLock();\n          }\n\n          _this4.elements.keyContainer.removeEventListener('keyup', function (e) {\n            return _this4.removeActiveClass(e);\n          });\n        } else if (event.target.textContent === item.textContent) {\n          if (event.target.textContent === 'Shift') {\n            _this4.toggleCapsLock();\n          }\n\n          _this4.elements.keyContainer.removeEventListener('mouseup', function (e) {\n            return _this4.removeActiveClass(e);\n          });\n        }\n      });\n    }\n  }, {\n    key: \"toggleCapsLock\",\n    value: function toggleCapsLock() {\n      var _this5 = this;\n\n      this.props.capsLock = !this.props.capsLock;\n      this.elements.keys.forEach(function (key) {\n        var innerKey = key;\n\n        if (innerKey.childElementCount === 0) {\n          innerKey.textContent = _this5.props.capsLock ? innerKey.textContent.toUpperCase() : innerKey.textContent.toLowerCase();\n        }\n      });\n    }\n  }, {\n    key: \"toggleLanguage\",\n    value: function toggleLanguage() {\n      this.props.language = this.props.language === 'en' ? 'ru' : 'en';\n      localStorage.setItem('lang', this.props.language);\n      this.elements.keyContainer.innerHTML = '';\n      this.elements.keyContainer.appendChild(Object(_createKeys__WEBPACK_IMPORTED_MODULE_1__[\"createKeys\"])(this.props.language));\n      this.elements.keys = this.elements.keyContainer.querySelectorAll('.keyboard__key');\n    }\n  }]);\n\n  return Keyboard;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keyboard);\n\n//# sourceURL=webpack:///./src/js/keyboard.js?");

/***/ }),

/***/ "./src/js/languages.js":
/*!*****************************!*\
  !*** ./src/js/languages.js ***!
  \*****************************/
/*! exports provided: languages, insertLineBreak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"languages\", function() { return languages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertLineBreak\", function() { return insertLineBreak; });\nvar engLang = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'Control', 'language', 'Alt', 'space', 'left', 'down', 'right'];\nvar ruLang = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'ь', 'б', 'ю', 'up', 'Control', 'language', 'Alt', 'space', 'left', 'down', 'right'];\nvar languages = {\n  en: engLang,\n  ru: ruLang\n};\n\nvar insertLineBreak = function insertLineBreak(key) {\n  return ['Backspace', 'Delete', 'Enter', 'up'].includes(key);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/languages.js?");

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