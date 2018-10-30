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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/dialog/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/src/common/index.js":
/*!**********************************!*\
  !*** ./core/src/common/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/utils */ "./core/src/common/libs/utils.js");


var mui = {
    util: _libs_utils__WEBPACK_IMPORTED_MODULE_0__["default"]
};

mui.createElement = _libs_utils__WEBPACK_IMPORTED_MODULE_0__["default"].createElement;

/* harmony default export */ __webpack_exports__["default"] = (mui);

/***/ }),

/***/ "./core/src/common/libs/utils.js":
/*!***************************************!*\
  !*** ./core/src/common/libs/utils.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var util = {};

/**
 * @param {String/Function} query dot class name or node name or matcher function.
 * @return {Function}
 */
util.prepareQuery = function (query) {
    return query instanceof Function ? query : function (element) {
        return util.match(element, query);
    };
};

/**
 * @param {Element} e
 * @param {String/Function} s CSS Selector.
 * @return {Boolean}
 */
util.match = function (e, s) {
    return (e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector).call(e, s);
};

/**
 * @param {Element} element
 * @param {String/Function} query dot class name or node name or matcher function.
 * @return {HTMLElement/null}
 */
util.findChild = function (element, query) {
    var match = util.prepareQuery(query);

    // Caution: `element.children` is `undefined` in some environments if `element` is `svg`
    for (var i = 0; i < element.childNodes.length; i++) {
        var node = element.childNodes[i];
        if (node.nodeType !== Node.ELEMENT_NODE) {
            // process only element nodes
            continue;
        }
        if (match(node)) {
            return node;
        }
    }
    return null;
};

util.isInstance = function (obj, instance) {
    return Object.prototype.toString.call(obj).toLowerCase() === "[object " + instance.toLowerCase() + "]";
};

util.createElement = function (IDSelector, options) {
    var template = document.getElementById(IDSelector).content;
    var cloneTemplate = document.importNode(template, true);
    document.body.appendChild(cloneTemplate);
};

/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ }),

/***/ "./core/src/elements/base/base-dialog.js":
/*!***********************************************!*\
  !*** ./core/src/elements/base/base-dialog.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ "./core/src/elements/base/base-element.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BaseDialogElement = function (_BaseElement) {
    _inherits(BaseDialogElement, _BaseElement);

    function BaseDialogElement() {
        _classCallCheck(this, BaseDialogElement);

        var _this = _possibleConstructorReturn(this, (BaseDialogElement.__proto__ || Object.getPrototypeOf(BaseDialogElement)).call(this));

        _this._cancel = _this._cancel.bind(_this);
        return _this;
    }

    // 显隐转换


    _createClass(BaseDialogElement, [{
        key: '_toggleStyle',
        value: function _toggleStyle(shouldShow) {
            this.style.display = shouldShow ? 'block' : 'none';
        }
    }, {
        key: '_setVisible',
        value: function _setVisible(shouldShow) {
            this._toggleStyle(shouldShow);
        }
    }, {
        key: '_cancel',
        value: function _cancel() {
            console.log('点击了cancel');
            this._setVisible(false);
        }
    }, {
        key: 'show',
        value: function show() {
            this._setVisible(true);
        }
    }, {
        key: 'hide',
        value: function hide() {
            this._setVisible(false);
        }

        // life-cycle 首次插入到DOM时调用

    }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
            console.log('connectedCallback，life-cycle 首次插入到DOM');
            if (this._mask) {
                this._mask.addEventListener('click', this._cancel);
            }
        }

        // life-cycle 属性变化时

    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback() {
            console.log('attributeChangedCallback, life-cycle 属性变化时');
        }

        // life-cycle 被移除时

    }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
            console.log('attributeChangedCallback, life-cycle 从DOM移除时');
        }
    }]);

    return BaseDialogElement;
}(_base_element__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BaseDialogElement);

/***/ }),

/***/ "./core/src/elements/base/base-element.js":
/*!************************************************!*\
  !*** ./core/src/elements/base/base-element.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getElementClass() {
    if (typeof HTMLElement !== 'function') {
        // case of Safari
        var _BaseElement = function _BaseElement() {};
        _BaseElement.prototype = document.createElement('div');
        return _BaseElement;
    } else {
        return HTMLElement;
    }
}

var BaseElement = function (_getElementClass) {
    _inherits(BaseElement, _getElementClass);

    function BaseElement() {
        _classCallCheck(this, BaseElement);

        return _possibleConstructorReturn(this, (BaseElement.__proto__ || Object.getPrototypeOf(BaseElement)).call(this));
    }

    return BaseElement;
}(getElementClass());

/* harmony default export */ __webpack_exports__["default"] = (BaseElement);

/***/ }),

/***/ "./core/src/elements/mui-dialog/index.css":
/*!************************************************!*\
  !*** ./core/src/elements/mui-dialog/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src!./index.css */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./core/src/elements/mui-dialog/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./core/src/elements/mui-dialog/index.js":
/*!***********************************************!*\
  !*** ./core/src/elements/mui-dialog/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./core/src/elements/mui-dialog/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_base_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base-dialog */ "./core/src/elements/base/base-dialog.js");
/* harmony import */ var _common_libs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/libs/utils */ "./core/src/common/libs/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DialogElement = function (_BaseDialogElement) {
    _inherits(DialogElement, _BaseDialogElement);

    function DialogElement() {
        _classCallCheck(this, DialogElement);

        var _this = _possibleConstructorReturn(this, (DialogElement.__proto__ || Object.getPrototypeOf(DialogElement)).call(this));

        _this._compile();
        return _this;
    }

    _createClass(DialogElement, [{
        key: '_compile',
        value: function _compile() {
            this.style.display = 'none';
            this.style.zIndex = 10001;

            /**
             * dialog组件结构
             *
             * <mui-dialog class="mui-dialog" style="none">
             *   <div class="dialog__mask"></div>
             *   <div class="dialog__wrapper">
             *      <div class="dialog__container">
             *      </div>
             *   </div>
             * </mui-dialog>
             */

            // 创建一个fragment暂时存放mui-dialog中的所有子元素
            var content = document.createDocumentFragment();
            while (this.firstChild) {
                content.appendChild(this.firstChild);
            }

            // 创建mask和wrapper
            var mask = document.createElement('div');
            mask.classList.add('dialog__mask');

            var wrapper = document.createElement('div');
            wrapper.classList.add('dialog__wrapper');

            var container = document.createElement('div');
            container.classList.add('dialog__container');
            wrapper.appendChild(container);

            this.appendChild(mask);
            this.appendChild(wrapper);
            // container中放入自定义子元素片段
            this._dialog.children[0].append(content);

            this._mask.style.zIndex = 20000;
            this._dialog.style.zIndex = 20001;
        }
    }, {
        key: '_mask',
        get: function get() {
            return _common_libs_utils__WEBPACK_IMPORTED_MODULE_2__["default"].findChild(this, '.dialog__mask');
        }
    }, {
        key: '_dialog',
        get: function get() {
            return _common_libs_utils__WEBPACK_IMPORTED_MODULE_2__["default"].findChild(this, '.dialog__wrapper');
        }
    }]);

    return DialogElement;
}(_base_base_dialog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (DialogElement);


customElements.define('mui-dialog', DialogElement);

/***/ }),

/***/ "./core/src/index.esm.js":
/*!*******************************!*\
  !*** ./core/src/index.esm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/index */ "./core/src/polyfills/index.js");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/index */ "./core/src/common/index.js");



/* harmony default export */ __webpack_exports__["default"] = (_common_index__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./core/src/polyfills/index.js":
/*!*************************************!*\
  !*** ./core/src/polyfills/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill_switches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill-switches */ "./core/src/polyfills/polyfill-switches.js");
/* harmony import */ var _polyfill_switches__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_switches__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onsenui_custom_elements_src_custom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @onsenui/custom-elements/src/custom-elements */ "./node_modules/@onsenui/custom-elements/src/custom-elements.js");
// Polyfill Custom Elements v1 with global namespace pollution



/***/ }),

/***/ "./core/src/polyfills/polyfill-switches.js":
/*!*************************************************!*\
  !*** ./core/src/polyfills/polyfill-switches.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// For @onsenui/custom-elements
if (window.customElements) {
    // even if native CE1 impl exists, use polyfill
    window.customElements.forcePolyfill = true;
}

/***/ }),

/***/ "./examples/dialog/index.js":
/*!**********************************!*\
  !*** ./examples/dialog/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_src_index_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/src/index.esm */ "./core/src/index.esm.js");
/* harmony import */ var _ele_mui_dialog_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ele/mui-dialog/index */ "./core/src/elements/mui-dialog/index.js");



// 创建dialog
_core_src_index_esm__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('confirm-dialog.html', {});

var dialog = document.getElementById('my-dialog'),
    showBtnEl = document.querySelector('#btn1'),
    closeEl = document.querySelector('#my-dialog').querySelector('.dialog__footer');

showBtnEl.addEventListener('click', function () {
    dialog.show();
});

closeEl.addEventListener('click', function () {
    dialog.hide();
});

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/AlreadyConstructedMarker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/AlreadyConstructedMarker.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class exists only to work around Closure's lack of a way to describe
 * singletons. It represents the 'already constructed marker' used in custom
 * element construction stacks.
 *
 * https://html.spec.whatwg.org/#concept-already-constructed-marker
 */
var AlreadyConstructedMarker = function AlreadyConstructedMarker() {
  _classCallCheck(this, AlreadyConstructedMarker);
};

/* harmony default export */ __webpack_exports__["default"] = (new AlreadyConstructedMarker());

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities.js */ "./node_modules/@onsenui/custom-elements/src/Utilities.js");
/* harmony import */ var _CustomElementState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomElementState.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementState.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CustomElementInternals = function () {
  function CustomElementInternals() {
    _classCallCheck(this, CustomElementInternals);

    /** @type {!Map<string, !CustomElementDefinition>} */
    this._localNameToDefinition = new Map();

    /** @type {!Map<!Function, !CustomElementDefinition>} */
    this._constructorToDefinition = new Map();

    /** @type {!Array<!function(!Node)>} */
    this._patches = [];

    /** @type {boolean} */
    this._hasPatches = false;
  }

  /**
   * @param {string} localName
   * @param {!CustomElementDefinition} definition
   */


  _createClass(CustomElementInternals, [{
    key: 'setDefinition',
    value: function setDefinition(localName, definition) {
      this._localNameToDefinition.set(localName, definition);
      this._constructorToDefinition.set(definition.constructor, definition);
    }

    /**
     * @param {string} localName
     * @return {!CustomElementDefinition|undefined}
     */

  }, {
    key: 'localNameToDefinition',
    value: function localNameToDefinition(localName) {
      return this._localNameToDefinition.get(localName);
    }

    /**
     * @param {!Function} constructor
     * @return {!CustomElementDefinition|undefined}
     */

  }, {
    key: 'constructorToDefinition',
    value: function constructorToDefinition(constructor) {
      return this._constructorToDefinition.get(constructor);
    }

    /**
     * @param {!function(!Node)} listener
     */

  }, {
    key: 'addPatch',
    value: function addPatch(listener) {
      this._hasPatches = true;
      this._patches.push(listener);
    }

    /**
     * @param {!Node} node
     */

  }, {
    key: 'patchTree',
    value: function patchTree(node) {
      var _this = this;

      if (!this._hasPatches) return;

      _Utilities_js__WEBPACK_IMPORTED_MODULE_0__["walkDeepDescendantElements"](node, function (element) {
        return _this.patch(element);
      });
    }

    /**
     * @param {!Node} node
     */

  }, {
    key: 'patch',
    value: function patch(node) {
      if (!this._hasPatches) return;

      if (node.__CE_patched) return;
      node.__CE_patched = true;

      for (var i = 0; i < this._patches.length; i++) {
        this._patches[i](node);
      }
    }

    /**
     * @param {!Node} root
     */

  }, {
    key: 'connectTree',
    value: function connectTree(root) {
      var elements = [];

      _Utilities_js__WEBPACK_IMPORTED_MODULE_0__["walkDeepDescendantElements"](root, function (element) {
        return elements.push(element);
      });

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.__CE_state === _CustomElementState_js__WEBPACK_IMPORTED_MODULE_1__["default"].custom) {
          if (_Utilities_js__WEBPACK_IMPORTED_MODULE_0__["isConnected"](element)) {
            this.connectedCallback(element);
          }
        } else {
          this.upgradeElement(element);
        }
      }
    }

    /**
     * @param {!Node} root
     */

  }, {
    key: 'disconnectTree',
    value: function disconnectTree(root) {
      var elements = [];

      _Utilities_js__WEBPACK_IMPORTED_MODULE_0__["walkDeepDescendantElements"](root, function (element) {
        return elements.push(element);
      });

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.__CE_state === _CustomElementState_js__WEBPACK_IMPORTED_MODULE_1__["default"].custom) {
          this.disconnectedCallback(element);
        }
      }
    }

    /**
     * Upgrades all uncustomized custom elements at and below a root node for
     * which there is a definition. When custom element reaction callbacks are
     * assumed to be called synchronously (which, by the current DOM / HTML spec
     * definitions, they are *not*), callbacks for both elements customized
     * synchronously by the parser and elements being upgraded occur in the same
     * relative order.
     *
     * NOTE: This function, when used to simulate the construction of a tree that
     * is already created but not customized (i.e. by the parser), does *not*
     * prevent the element from reading the 'final' (true) state of the tree. For
     * example, the element, during truly synchronous parsing / construction would
     * see that it contains no children as they have not yet been inserted.
     * However, this function does not modify the tree, the element will
     * (incorrectly) have children. Additionally, self-modification restrictions
     * for custom element constructors imposed by the DOM spec are *not* enforced.
     *
     *
     * The following nested list shows the steps extending down from the HTML
     * spec's parsing section that cause elements to be synchronously created and
     * upgraded:
     *
     * The "in body" insertion mode:
     * https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
     * - Switch on token:
     *   .. other cases ..
     *   -> Any other start tag
     *      - [Insert an HTML element](below) for the token.
     *
     * Insert an HTML element:
     * https://html.spec.whatwg.org/multipage/syntax.html#insert-an-html-element
     * - Insert a foreign element for the token in the HTML namespace:
     *   https://html.spec.whatwg.org/multipage/syntax.html#insert-a-foreign-element
     *   - Create an element for a token:
     *     https://html.spec.whatwg.org/multipage/syntax.html#create-an-element-for-the-token
     *     - Will execute script flag is true?
     *       - (Element queue pushed to the custom element reactions stack.)
     *     - Create an element:
     *       https://dom.spec.whatwg.org/#concept-create-element
     *       - Sync CE flag is true?
     *         - Constructor called.
     *         - Self-modification restrictions enforced.
     *       - Sync CE flag is false?
     *         - (Upgrade reaction enqueued.)
     *     - Attributes appended to element.
     *       (`attributeChangedCallback` reactions enqueued.)
     *     - Will execute script flag is true?
     *       - (Element queue popped from the custom element reactions stack.
     *         Reactions in the popped stack are invoked.)
     *   - (Element queue pushed to the custom element reactions stack.)
     *   - Insert the element:
     *     https://dom.spec.whatwg.org/#concept-node-insert
     *     - Shadow-including descendants are connected. During parsing
     *       construction, there are no shadow-*excluding* descendants.
     *       However, the constructor may have validly attached a shadow
     *       tree to itself and added descendants to that shadow tree.
     *       (`connectedCallback` reactions enqueued.)
     *   - (Element queue popped from the custom element reactions stack.
     *     Reactions in the popped stack are invoked.)
     *
     * @param {!Node} root
     * @param {!Set<Node>=} visitedImports
     */

  }, {
    key: 'patchAndUpgradeTree',
    value: function patchAndUpgradeTree(root) {
      var _this2 = this;

      var visitedImports = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

      var elements = [];

      var gatherElements = function gatherElements(element) {
        if (element.localName === 'link' && element.getAttribute('rel') === 'import') {
          // The HTML Imports polyfill sets a descendant element of the link to
          // the `import` property, specifically this is *not* a Document.
          var importNode = /** @type {?Node} */element.import;

          if (importNode instanceof Node && importNode.readyState === 'complete') {
            importNode.__CE_isImportDocument = true;

            // Connected links are associated with the registry.
            importNode.__CE_hasRegistry = true;
          } else {
            // If this link's import root is not available, its contents can't be
            // walked. Wait for 'load' and walk it when it's ready.
            element.addEventListener('load', function () {
              var importNode = /** @type {!Node} */element.import;

              if (importNode.__CE_documentLoadHandled) return;
              importNode.__CE_documentLoadHandled = true;

              importNode.__CE_isImportDocument = true;

              // Connected links are associated with the registry.
              importNode.__CE_hasRegistry = true;

              // Clone the `visitedImports` set that was populated sync during
              // the `patchAndUpgradeTree` call that caused this 'load' handler to
              // be added. Then, remove *this* link's import node so that we can
              // walk that import again, even if it was partially walked later
              // during the same `patchAndUpgradeTree` call.
              var clonedVisitedImports = new Set(visitedImports);
              visitedImports.delete(importNode);

              _this2.patchAndUpgradeTree(importNode, visitedImports);
            });
          }
        } else {
          elements.push(element);
        }
      };

      // `walkDeepDescendantElements` populates (and internally checks against)
      // `visitedImports` when traversing a loaded import.
      _Utilities_js__WEBPACK_IMPORTED_MODULE_0__["walkDeepDescendantElements"](root, gatherElements, visitedImports);

      if (this._hasPatches) {
        for (var i = 0; i < elements.length; i++) {
          this.patch(elements[i]);
        }
      }

      for (var _i = 0; _i < elements.length; _i++) {
        this.upgradeElement(elements[_i]);
      }
    }

    /**
     * @param {!Element} element
     */

  }, {
    key: 'upgradeElement',
    value: function upgradeElement(element) {
      var currentState = element.__CE_state;
      if (currentState !== undefined) return;

      var definition = this.localNameToDefinition(element.localName);
      if (!definition) return;

      definition.constructionStack.push(element);

      var constructor = definition.constructor;
      try {
        try {
          var result = new constructor();
          if (result !== element) {
            throw new Error('The custom element constructor did not produce the element being upgraded.');
          }
        } finally {
          definition.constructionStack.pop();
        }
      } catch (e) {
        element.__CE_state = _CustomElementState_js__WEBPACK_IMPORTED_MODULE_1__["default"].failed;
        throw e;
      }

      element.__CE_state = _CustomElementState_js__WEBPACK_IMPORTED_MODULE_1__["default"].custom;
      element.__CE_definition = definition;

      if (definition.attributeChangedCallback) {
        var observedAttributes = definition.observedAttributes;
        for (var i = 0; i < observedAttributes.length; i++) {
          var name = observedAttributes[i];
          var value = element.getAttribute(name);
          if (value !== null) {
            this.attributeChangedCallback(element, name, null, value, null);
          }
        }
      }

      if (_Utilities_js__WEBPACK_IMPORTED_MODULE_0__["isConnected"](element)) {
        this.connectedCallback(element);
      }
    }

    /**
     * @param {!Element} element
     */

  }, {
    key: 'connectedCallback',
    value: function connectedCallback(element) {
      var definition = element.__CE_definition;
      if (definition.connectedCallback) {
        definition.connectedCallback.call(element);
      }

      element.__CE_isConnectedCallbackCalled = true;
    }

    /**
     * @param {!Element} element
     */

  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback(element) {
      if (!element.__CE_isConnectedCallbackCalled) {
        this.connectedCallback(element);
      }

      var definition = element.__CE_definition;
      if (definition.disconnectedCallback) {
        definition.disconnectedCallback.call(element);
      }

      element.__CE_isConnectedCallbackCalled = undefined;
    }

    /**
     * @param {!Element} element
     * @param {string} name
     * @param {?string} oldValue
     * @param {?string} newValue
     * @param {?string} namespace
     */

  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(element, name, oldValue, newValue, namespace) {
      var definition = element.__CE_definition;
      if (definition.attributeChangedCallback && definition.observedAttributes.indexOf(name) > -1) {
        definition.attributeChangedCallback.call(element, name, oldValue, newValue, namespace);
      }
    }
  }]);

  return CustomElementInternals;
}();

/* harmony default export */ __webpack_exports__["default"] = (CustomElementInternals);

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/CustomElementRegistry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/CustomElementRegistry.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomElementInternals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomElementInternals.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js");
/* harmony import */ var _DocumentConstructionObserver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentConstructionObserver.js */ "./node_modules/@onsenui/custom-elements/src/DocumentConstructionObserver.js");
/* harmony import */ var _Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Deferred.js */ "./node_modules/@onsenui/custom-elements/src/Deferred.js");
/* harmony import */ var _Utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utilities.js */ "./node_modules/@onsenui/custom-elements/src/Utilities.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






/**
 * @unrestricted
 */

var CustomElementRegistry = function () {

  /**
   * @param {!CustomElementInternals} internals
   */
  function CustomElementRegistry(internals) {
    _classCallCheck(this, CustomElementRegistry);

    /**
     * @private
     * @type {boolean}
     */
    this._elementDefinitionIsRunning = false;

    /**
     * @private
     * @type {!CustomElementInternals}
     */
    this._internals = internals;

    /**
     * @private
     * @type {!Map<string, !Deferred<undefined>>}
     */
    this._whenDefinedDeferred = new Map();

    /**
     * The default flush callback triggers the document walk synchronously.
     * @private
     * @type {!Function}
     */
    this._flushCallback = function (fn) {
      return fn();
    };

    /**
     * @private
     * @type {boolean}
     */
    this._flushPending = false;

    /**
     * @private
     * @type {!Array<string>}
     */
    this._unflushedLocalNames = [];

    /**
     * @private
     * @type {!DocumentConstructionObserver}
     */
    this._documentConstructionObserver = new _DocumentConstructionObserver_js__WEBPACK_IMPORTED_MODULE_1__["default"](internals, document);
  }

  /**
   * @param {string} localName
   * @param {!Function} constructor
   */


  _createClass(CustomElementRegistry, [{
    key: 'define',
    value: function define(localName, constructor) {
      var _this = this;

      if (!(constructor instanceof Function)) {
        throw new TypeError('Custom element constructors must be functions.');
      }

      if (!_Utilities_js__WEBPACK_IMPORTED_MODULE_3__["isValidCustomElementName"](localName)) {
        throw new SyntaxError('The element name \'' + localName + '\' is not valid.');
      }

      if (this._internals.localNameToDefinition(localName)) {
        throw new Error('A custom element with name \'' + localName + '\' has already been defined.');
      }

      if (this._elementDefinitionIsRunning) {
        throw new Error('A custom element is already being defined.');
      }
      this._elementDefinitionIsRunning = true;

      var connectedCallback = void 0;
      var disconnectedCallback = void 0;
      var adoptedCallback = void 0;
      var attributeChangedCallback = void 0;
      var observedAttributes = void 0;
      try {
        var getCallback = function getCallback(name) {
          var callbackValue = prototype[name];
          if (callbackValue !== undefined && !(callbackValue instanceof Function)) {
            throw new Error('The \'' + name + '\' callback must be a function.');
          }
          return callbackValue;
        };

        /** @type {!Object} */
        var prototype = constructor.prototype;
        if (!(prototype instanceof Object)) {
          throw new TypeError('The custom element constructor\'s prototype is not an object.');
        }

        connectedCallback = getCallback('connectedCallback');
        disconnectedCallback = getCallback('disconnectedCallback');
        adoptedCallback = getCallback('adoptedCallback');
        attributeChangedCallback = getCallback('attributeChangedCallback');
        observedAttributes = constructor['observedAttributes'] || [];
      } catch (e) {
        return;
      } finally {
        this._elementDefinitionIsRunning = false;
      }

      var definition = {
        localName: localName,
        constructor: constructor,
        connectedCallback: connectedCallback,
        disconnectedCallback: disconnectedCallback,
        adoptedCallback: adoptedCallback,
        attributeChangedCallback: attributeChangedCallback,
        observedAttributes: observedAttributes,
        constructionStack: []
      };

      this._internals.setDefinition(localName, definition);

      this._unflushedLocalNames.push(localName);

      // If we've already called the flush callback and it hasn't called back yet,
      // don't call it again.
      if (!this._flushPending) {
        this._flushPending = true;
        this._flushCallback(function () {
          return _this._flush();
        });
      }
    }
  }, {
    key: '_flush',
    value: function _flush() {
      // If no new definitions were defined, don't attempt to flush. This could
      // happen if a flush callback keeps the function it is given and calls it
      // multiple times.
      if (this._flushPending === false) return;

      this._flushPending = false;
      this._internals.patchAndUpgradeTree(document);

      while (this._unflushedLocalNames.length > 0) {
        var localName = this._unflushedLocalNames.shift();
        var deferred = this._whenDefinedDeferred.get(localName);
        if (deferred) {
          deferred.resolve(undefined);
        }
      }
    }

    /**
     * @param {string} localName
     * @return {Function|undefined}
     */

  }, {
    key: 'get',
    value: function get(localName) {
      var definition = this._internals.localNameToDefinition(localName);
      if (definition) {
        return definition.constructor;
      }

      return undefined;
    }

    /**
     * @param {string} localName
     * @return {!Promise<undefined>}
     */

  }, {
    key: 'whenDefined',
    value: function whenDefined(localName) {
      if (!_Utilities_js__WEBPACK_IMPORTED_MODULE_3__["isValidCustomElementName"](localName)) {
        return Promise.reject(new SyntaxError('\'' + localName + '\' is not a valid custom element name.'));
      }

      var prior = this._whenDefinedDeferred.get(localName);
      if (prior) {
        return prior.toPromise();
      }

      var deferred = new _Deferred_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this._whenDefinedDeferred.set(localName, deferred);

      var definition = this._internals.localNameToDefinition(localName);
      // Resolve immediately only if the given local name has a definition *and*
      // the full document walk to upgrade elements with that local name has
      // already happened.
      if (definition && this._unflushedLocalNames.indexOf(localName) === -1) {
        deferred.resolve(undefined);
      }

      return deferred.toPromise();
    }
  }, {
    key: 'polyfillWrapFlushCallback',
    value: function polyfillWrapFlushCallback(outer) {
      this._documentConstructionObserver.disconnect();
      var inner = this._flushCallback;
      this._flushCallback = function (flush) {
        return outer(function () {
          return inner(flush);
        });
      };
    }
  }]);

  return CustomElementRegistry;
}();

// Closure compiler exports.


/* harmony default export */ __webpack_exports__["default"] = (CustomElementRegistry);
window['CustomElementRegistry'] = CustomElementRegistry;
CustomElementRegistry.prototype['define'] = CustomElementRegistry.prototype.define;
CustomElementRegistry.prototype['get'] = CustomElementRegistry.prototype.get;
CustomElementRegistry.prototype['whenDefined'] = CustomElementRegistry.prototype.whenDefined;
CustomElementRegistry.prototype['polyfillWrapFlushCallback'] = CustomElementRegistry.prototype.polyfillWrapFlushCallback;

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/CustomElementState.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/CustomElementState.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @enum {number}
 */
var CustomElementState = {
  custom: 1,
  failed: 2
};

/* harmony default export */ __webpack_exports__["default"] = (CustomElementState);

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/Deferred.js":
/*!***************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/Deferred.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template T
 */
var Deferred = function () {
  function Deferred() {
    var _this = this;

    _classCallCheck(this, Deferred);

    /**
     * @private
     * @type {T|undefined}
     */
    this._value = undefined;

    /**
     * @private
     * @type {Function|undefined}
     */
    this._resolve = undefined;

    /**
     * @private
     * @type {!Promise<T>}
     */
    this._promise = new Promise(function (resolve) {
      _this._resolve = resolve;

      if (_this._value) {
        resolve(_this._value);
      }
    });
  }

  /**
   * @param {T} value
   */


  _createClass(Deferred, [{
    key: 'resolve',
    value: function resolve(value) {
      if (this._value) {
        throw new Error('Already resolved.');
      }

      this._value = value;

      if (this._resolve) {
        this._resolve(value);
      }
    }

    /**
     * @return {!Promise<T>}
     */

  }, {
    key: 'toPromise',
    value: function toPromise() {
      return this._promise;
    }
  }]);

  return Deferred;
}();

/* harmony default export */ __webpack_exports__["default"] = (Deferred);

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/DocumentConstructionObserver.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/DocumentConstructionObserver.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomElementInternals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomElementInternals.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var DocumentConstructionObserver = function () {
  function DocumentConstructionObserver(internals, doc) {
    _classCallCheck(this, DocumentConstructionObserver);

    /**
     * @type {!CustomElementInternals}
     */
    this._internals = internals;

    /**
     * @type {!Document}
     */
    this._document = doc;

    /**
     * @type {MutationObserver|undefined}
     */
    this._observer = undefined;

    // Simulate tree construction for all currently accessible nodes in the
    // document.
    this._internals.patchAndUpgradeTree(this._document);

    if (this._document.readyState === 'loading') {
      this._observer = new MutationObserver(this._handleMutations.bind(this));

      // Nodes created by the parser are given to the observer *before* the next
      // task runs. Inline scripts are run in a new task. This means that the
      // observer will be able to handle the newly parsed nodes before the inline
      // script is run.
      this._observer.observe(this._document, {
        childList: true,
        subtree: true
      });
    }
  }

  _createClass(DocumentConstructionObserver, [{
    key: 'disconnect',
    value: function disconnect() {
      if (this._observer) {
        this._observer.disconnect();
      }
    }

    /**
     * @param {!Array<!MutationRecord>} mutations
     */

  }, {
    key: '_handleMutations',
    value: function _handleMutations(mutations) {
      // Once the document's `readyState` is 'interactive' or 'complete', all new
      // nodes created within that document will be the result of script and
      // should be handled by patching.
      var readyState = this._document.readyState;
      if (readyState === 'interactive' || readyState === 'complete') {
        this.disconnect();
      }

      for (var i = 0; i < mutations.length; i++) {
        var addedNodes = mutations[i].addedNodes;
        for (var j = 0; j < addedNodes.length; j++) {
          var node = addedNodes[j];
          this._internals.patchAndUpgradeTree(node);
        }
      }
    }
  }]);

  return DocumentConstructionObserver;
}();

/* harmony default export */ __webpack_exports__["default"] = (DocumentConstructionObserver);

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/Patch/Document.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/Patch/Document.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native.js */ "./node_modules/@onsenui/custom-elements/src/Patch/Native.js");
/* harmony import */ var _CustomElementInternals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomElementInternals.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js");
/* harmony import */ var _Utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities.js */ "./node_modules/@onsenui/custom-elements/src/Utilities.js");
/* harmony import */ var _Interface_ParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Interface/ParentNode.js */ "./node_modules/@onsenui/custom-elements/src/Patch/Interface/ParentNode.js");






/**
 * @param {!CustomElementInternals} internals
 */
/* harmony default export */ __webpack_exports__["default"] = (function (internals) {
  _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["setPropertyUnchecked"](Document.prototype, 'createElement',
  /**
   * @this {Document}
   * @param {string} localName
   * @return {!Element}
   */
  function (localName) {
    // Only create custom elements if this document is associated with the registry.
    if (this.__CE_hasRegistry) {
      var definition = internals.localNameToDefinition(localName);
      if (definition) {
        return new definition.constructor();
      }
    }

    var result = /** @type {!Element} */
    _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Document_createElement.call(this, localName);
    internals.patch(result);
    return result;
  });

  _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["setPropertyUnchecked"](Document.prototype, 'importNode',
  /**
   * @this {Document}
   * @param {!Node} node
   * @param {boolean=} deep
   * @return {!Node}
   */
  function (node, deep) {
    var clone = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Document_importNode.call(this, node, deep);
    // Only create custom elements if this document is associated with the registry.
    if (!this.__CE_hasRegistry) {
      internals.patchTree(clone);
    } else {
      internals.patchAndUpgradeTree(clone);
    }
    return clone;
  });

  var NS_HTML = "http://www.w3.org/1999/xhtml";

  _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["setPropertyUnchecked"](Document.prototype, 'createElementNS',
  /**
   * @this {Document}
   * @param {?string} namespace
   * @param {string} localName
   * @return {!Element}
   */
  function (namespace, localName) {
    // Only create custom elements if this document is associated with the registry.
    if (this.__CE_hasRegistry && (namespace === null || namespace === NS_HTML)) {
      var definition = internals.localNameToDefinition(localName);
      if (definition) {
        return new definition.constructor();
      }
    }

    var result = /** @type {!Element} */
    _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Document_createElementNS.call(this, namespace, localName);
    internals.patch(result);
    return result;
  });

  Object(_Interface_ParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(internals, Document.prototype, {
    prepend: _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Document_prepend,
    append: _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Document_append
  });
});;

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/Patch/Element.js":
/*!********************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/Patch/Element.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native.js */ "./node_modules/@onsenui/custom-elements/src/Patch/Native.js");
/* harmony import */ var _CustomElementInternals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomElementInternals.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js");
/* harmony import */ var _CustomElementState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CustomElementState.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementState.js");
/* harmony import */ var _Utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities.js */ "./node_modules/@onsenui/custom-elements/src/Utilities.js");
/* harmony import */ var _Interface_ParentNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Interface/ParentNode.js */ "./node_modules/@onsenui/custom-elements/src/Patch/Interface/ParentNode.js");
/* harmony import */ var _Interface_ChildNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Interface/ChildNode.js */ "./node_modules/@onsenui/custom-elements/src/Patch/Interface/ChildNode.js");








/**
 * @param {!CustomElementInternals} internals
 */
/* harmony default export */ __webpack_exports__["default"] = (function (internals) {
  if (_Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_attachShadow) {
    _Utilities_js__WEBPACK_IMPORTED_MODULE_3__["setPropertyUnchecked"](Element.prototype, 'attachShadow',
    /**
     * @this {Element}
     * @param {!{mode: string}} init
     * @return {ShadowRoot}
     */
    function (init) {
      var shadowRoot = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_attachShadow.call(this, init);
      this.__CE_shadowRoot = shadowRoot;
      return shadowRoot;
    });
  } else {
    console.warn('Custom Elements: `Element#attachShadow` was not patched.');
  }

  function patch_innerHTML(destination, baseDescriptor) {
    Object.defineProperty(destination, 'innerHTML', {
      enumerable: baseDescriptor.enumerable,
      configurable: true,
      get: baseDescriptor.get,
      set: /** @this {Element} */function set(htmlString) {
        var _this = this;

        var isConnected = _Utilities_js__WEBPACK_IMPORTED_MODULE_3__["isConnected"](this);

        // NOTE: In IE11, when using the native `innerHTML` setter, all nodes
        // that were previously descendants of the context element have all of
        // their children removed as part of the set - the entire subtree is
        // 'disassembled'. This work around walks the subtree *before* using the
        // native setter.
        /** @type {!Array<!Element>|undefined} */
        var removedElements = undefined;
        if (isConnected) {
          removedElements = [];
          _Utilities_js__WEBPACK_IMPORTED_MODULE_3__["walkDeepDescendantElements"](this, function (element) {
            if (element !== _this) {
              removedElements.push(element);
            }
          });
        }

        baseDescriptor.set.call(this, htmlString);

        if (removedElements) {
          for (var i = 0; i < removedElements.length; i++) {
            var element = removedElements[i];
            if (element.__CE_state === _CustomElementState_js__WEBPACK_IMPORTED_MODULE_2__["default"].custom) {
              internals.disconnectedCallback(element);
            }
          }
        }

        // Only create custom elements if this element's owner document is
        // associated with the registry.
        if (!this.ownerDocument.__CE_hasRegistry) {
          internals.patchTree(this);
        } else {
          internals.patchAndUpgradeTree(this);
        }
        return htmlString;
      }
    });
  }

  if (_Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_innerHTML && _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_innerHTML.get) {
    patch_innerHTML(Element.prototype, _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_innerHTML);
  } else if (_Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].HTMLElement_innerHTML && _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].HTMLElement_innerHTML.get) {
    patch_innerHTML(HTMLElement.prototype, _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].HTMLElement_innerHTML);
  } else {

    /** @type {HTMLDivElement} */
    var rawDiv = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Document_createElement.call(document, 'div');

    internals.addPatch(function (element) {
      patch_innerHTML(element, {
        enumerable: true,
        configurable: true,
        // Implements getting `innerHTML` by performing an unpatched `cloneNode`
        // of the element and returning the resulting element's `innerHTML`.
        // TODO: Is this too expensive?
        get: /** @this {Element} */function get() {
          return _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_cloneNode.call(this, true).innerHTML;
        },
        // Implements setting `innerHTML` by creating an unpatched element,
        // setting `innerHTML` of that element and replacing the target
        // element's children with those of the unpatched element.
        set: /** @this {Element} */function set(assignedValue) {
          // NOTE: re-route to `content` for `template` elements.
          // We need to do this because `template.appendChild` does not
          // route into `template.content`.
          /** @type {!Node} */
          var content = this.localName === 'template' ? /** @type {!HTMLTemplateElement} */this.content : this;
          rawDiv.innerHTML = assignedValue;

          while (content.childNodes.length > 0) {
            _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_removeChild.call(content, content.childNodes[0]);
          }
          while (rawDiv.childNodes.length > 0) {
            _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_appendChild.call(content, rawDiv.childNodes[0]);
          }
        }
      });
    });
  }

  _Utilities_js__WEBPACK_IMPORTED_MODULE_3__["setPropertyUnchecked"](Element.prototype, 'setAttribute',
  /**
   * @this {Element}
   * @param {string} name
   * @param {string} newValue
   */
  function (name, newValue) {
    // Fast path for non-custom elements.
    if (this.__CE_state !== _CustomElementState_js__WEBPACK_IMPORTED_MODULE_2__["default"].custom) {
      return _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_setAttribute.call(this, name, newValue);
    }

    var oldValue = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_getAttribute.call(this, name);
    _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_setAttribute.call(this, name, newValue);
    newValue = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_getAttribute.call(this, name);
    internals.attributeChangedCallback(this, name, oldValue, newValue, null);
  });

  _Utilities_js__WEBPACK_IMPORTED_MODULE_3__["setPropertyUnchecked"](Element.prototype, 'setAttributeNS',
  /**
   * @this {Element}
   * @param {?string} namespace
   * @param {string} name
   * @param {string} newValue
   */
  function (namespace, name, newValue) {
    // Fast path for non-custom elements.
    if (this.__CE_state !== _CustomElementState_js__WEBPACK_IMPORTED_MODULE_2__["default"].custom) {
      return _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_setAttributeNS.call(this, namespace, name, newValue);
    }

    var oldValue = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_getAttributeNS.call(this, namespace, name);
    _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_setAttributeNS.call(this, namespace, name, newValue);
    newValue = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_getAttributeNS.call(this, namespace, name);
    internals.attributeChangedCallback(this, name, oldValue, newValue, namespace);
  });

  _Utilities_js__WEBPACK_IMPORTED_MODULE_3__["setPropertyUnchecked"](Element.prototype, 'removeAttribute',
  /**
   * @this {Element}
   * @param {string} name
   */
  function (name) {
    // Fast path for non-custom elements.
    if (this.__CE_state !== _CustomElementState_js__WEBPACK_IMPORTED_MODULE_2__["default"].custom) {
      return _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_removeAttribute.call(this, name);
    }

    var oldValue = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_getAttribute.call(this, name);
    _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_removeAttribute.call(this, name);
    if (oldValue !== null) {
      internals.attributeChangedCallback(this, name, oldValue, null, null);
    }
  });

  _Utilities_js__WEBPACK_IMPORTED_MODULE_3__["setPropertyUnchecked"](Element.prototype, 'removeAttributeNS',
  /**
   * @this {Element}
   * @param {?string} namespace
   * @param {string} name
   */
  function (namespace, name) {
    // Fast path for non-custom elements.
    if (this.__CE_state !== _CustomElementState_js__WEBPACK_IMPORTED_MODULE_2__["default"].custom) {
      return _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_removeAttributeNS.call(this, namespace, name);
    }

    var oldValue = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_getAttributeNS.call(this, namespace, name);
    _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_removeAttributeNS.call(this, namespace, name);
    // In older browsers, `Element#getAttributeNS` may return the empty string
    // instead of null if the attribute does not exist. For details, see;
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNS#Notes
    var newValue = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_getAttributeNS.call(this, namespace, name);
    if (oldValue !== newValue) {
      internals.attributeChangedCallback(this, name, oldValue, newValue, namespace);
    }
  });

  function patch_insertAdjacentElement(destination, baseMethod) {
    _Utilities_js__WEBPACK_IMPORTED_MODULE_3__["setPropertyUnchecked"](destination, 'insertAdjacentElement',
    /**
     * @this {Element}
     * @param {string} where
     * @param {!Element} element
     * @return {?Element}
     */
    function (where, element) {
      var wasConnected = _Utilities_js__WEBPACK_IMPORTED_MODULE_3__["isConnected"](element);
      var insertedElement = /** @type {!Element} */
      baseMethod.call(this, where, element);

      if (wasConnected) {
        internals.disconnectTree(element);
      }

      if (_Utilities_js__WEBPACK_IMPORTED_MODULE_3__["isConnected"](insertedElement)) {
        internals.connectTree(element);
      }
      return insertedElement;
    });
  }

  if (_Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].HTMLElement_insertAdjacentElement) {
    patch_insertAdjacentElement(HTMLElement.prototype, _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].HTMLElement_insertAdjacentElement);
  } else if (_Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_insertAdjacentElement) {
    patch_insertAdjacentElement(Element.prototype, _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_insertAdjacentElement);
  } else {
    console.warn('Custom Elements: `Element#insertAdjacentElement` was not patched.');
  }

  Object(_Interface_ParentNode_js__WEBPACK_IMPORTED_MODULE_4__["default"])(internals, Element.prototype, {
    prepend: _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_prepend,
    append: _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_append
  });

  Object(_Interface_ChildNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(internals, Element.prototype, {
    before: _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_before,
    after: _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_after,
    replaceWith: _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_replaceWith,
    remove: _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Element_remove
  });
});;

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/Patch/HTMLElement.js":
/*!************************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/Patch/HTMLElement.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native.js */ "./node_modules/@onsenui/custom-elements/src/Patch/Native.js");
/* harmony import */ var _CustomElementInternals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomElementInternals.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js");
/* harmony import */ var _CustomElementState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CustomElementState.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementState.js");
/* harmony import */ var _AlreadyConstructedMarker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AlreadyConstructedMarker.js */ "./node_modules/@onsenui/custom-elements/src/AlreadyConstructedMarker.js");





/**
 * @param {!CustomElementInternals} internals
 */
/* harmony default export */ __webpack_exports__["default"] = (function (internals) {
  window['HTMLElement'] = function () {
    /**
     * @type {function(new: HTMLElement): !HTMLElement}
     */
    function HTMLElement() {
      // This should really be `new.target` but `new.target` can't be emulated
      // in ES5. Assuming the user keeps the default value of the constructor's
      // prototype's `constructor` property, this is equivalent.
      /** @type {!Function} */
      var constructor = this.constructor;

      var definition = internals.constructorToDefinition(constructor);
      if (!definition) {
        throw new Error('The custom element being constructed was not registered with `customElements`.');
      }

      var constructionStack = definition.constructionStack;

      if (constructionStack.length === 0) {
        var _element = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Document_createElement.call(document, definition.localName);
        Object.setPrototypeOf(_element, constructor.prototype);
        _element.__CE_state = _CustomElementState_js__WEBPACK_IMPORTED_MODULE_2__["default"].custom;
        _element.__CE_definition = definition;
        internals.patch(_element);
        return _element;
      }

      var lastIndex = constructionStack.length - 1;
      var element = constructionStack[lastIndex];
      if (element === _AlreadyConstructedMarker_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        throw new Error('The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.');
      }
      constructionStack[lastIndex] = _AlreadyConstructedMarker_js__WEBPACK_IMPORTED_MODULE_3__["default"];

      Object.setPrototypeOf(element, constructor.prototype);
      internals.patch( /** @type {!HTMLElement} */element);

      return element;
    }

    HTMLElement.prototype = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].HTMLElement.prototype;

    return HTMLElement;
  }();
});;

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/Patch/Interface/ChildNode.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/Patch/Interface/ChildNode.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomElementInternals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../CustomElementInternals.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js");
/* harmony import */ var _Utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities.js */ "./node_modules/@onsenui/custom-elements/src/Utilities.js");



/**
 * @typedef {{
 *   before: !function(...(!Node|string)),
 *   after: !function(...(!Node|string)),
 *   replaceWith: !function(...(!Node|string)),
 *   remove: !function(),
 * }}
 */
var ChildNodeNativeMethods = void 0;

/**
 * @param {!CustomElementInternals} internals
 * @param {!Object} destination
 * @param {!ChildNodeNativeMethods} builtIn
 */
/* harmony default export */ __webpack_exports__["default"] = (function (internals, destination, builtIn) {
  /**
   * @param {...(!Node|string)} nodes
   */
  destination['before'] = function () {
    for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
      nodes[_key] = arguments[_key];
    }

    // TODO: Fix this for when one of `nodes` is a DocumentFragment!
    var connectedBefore = /** @type {!Array<!Node>} */nodes.filter(function (node) {
      // DocumentFragments are not connected and will not be added to the list.
      return node instanceof Node && _Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](node);
    });

    builtIn.before.apply(this, nodes);

    for (var i = 0; i < connectedBefore.length; i++) {
      internals.disconnectTree(connectedBefore[i]);
    }

    if (_Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](this)) {
      for (var _i = 0; _i < nodes.length; _i++) {
        var node = nodes[_i];
        if (node instanceof Element) {
          internals.connectTree(node);
        }
      }
    }
  };

  /**
   * @param {...(!Node|string)} nodes
   */
  destination['after'] = function () {
    for (var _len2 = arguments.length, nodes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      nodes[_key2] = arguments[_key2];
    }

    // TODO: Fix this for when one of `nodes` is a DocumentFragment!
    var connectedBefore = /** @type {!Array<!Node>} */nodes.filter(function (node) {
      // DocumentFragments are not connected and will not be added to the list.
      return node instanceof Node && _Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](node);
    });

    builtIn.after.apply(this, nodes);

    for (var i = 0; i < connectedBefore.length; i++) {
      internals.disconnectTree(connectedBefore[i]);
    }

    if (_Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](this)) {
      for (var _i2 = 0; _i2 < nodes.length; _i2++) {
        var node = nodes[_i2];
        if (node instanceof Element) {
          internals.connectTree(node);
        }
      }
    }
  };

  /**
   * @param {...(!Node|string)} nodes
   */
  destination['replaceWith'] = function () {
    for (var _len3 = arguments.length, nodes = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      nodes[_key3] = arguments[_key3];
    }

    // TODO: Fix this for when one of `nodes` is a DocumentFragment!
    var connectedBefore = /** @type {!Array<!Node>} */nodes.filter(function (node) {
      // DocumentFragments are not connected and will not be added to the list.
      return node instanceof Node && _Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](node);
    });

    var wasConnected = _Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](this);

    builtIn.replaceWith.apply(this, nodes);

    for (var i = 0; i < connectedBefore.length; i++) {
      internals.disconnectTree(connectedBefore[i]);
    }

    if (wasConnected) {
      internals.disconnectTree(this);
      for (var _i3 = 0; _i3 < nodes.length; _i3++) {
        var node = nodes[_i3];
        if (node instanceof Element) {
          internals.connectTree(node);
        }
      }
    }
  };

  destination['remove'] = function () {
    var wasConnected = _Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](this);

    builtIn.remove.call(this);

    if (wasConnected) {
      internals.disconnectTree(this);
    }
  };
});;

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/Patch/Interface/ParentNode.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/Patch/Interface/ParentNode.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomElementInternals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../CustomElementInternals.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js");
/* harmony import */ var _Utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities.js */ "./node_modules/@onsenui/custom-elements/src/Utilities.js");



/**
 * @typedef {{
 *   prepend: !function(...(!Node|string)),
  *  append: !function(...(!Node|string)),
 * }}
 */
var ParentNodeNativeMethods = void 0;

/**
 * @param {!CustomElementInternals} internals
 * @param {!Object} destination
 * @param {!ParentNodeNativeMethods} builtIn
 */
/* harmony default export */ __webpack_exports__["default"] = (function (internals, destination, builtIn) {
  /**
   * @param {...(!Node|string)} nodes
   */
  destination['prepend'] = function () {
    for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
      nodes[_key] = arguments[_key];
    }

    // TODO: Fix this for when one of `nodes` is a DocumentFragment!
    var connectedBefore = /** @type {!Array<!Node>} */nodes.filter(function (node) {
      // DocumentFragments are not connected and will not be added to the list.
      return node instanceof Node && _Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](node);
    });

    builtIn.prepend.apply(this, nodes);

    for (var i = 0; i < connectedBefore.length; i++) {
      internals.disconnectTree(connectedBefore[i]);
    }

    if (_Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](this)) {
      for (var _i = 0; _i < nodes.length; _i++) {
        var node = nodes[_i];
        if (node instanceof Element) {
          internals.connectTree(node);
        }
      }
    }
  };

  /**
   * @param {...(!Node|string)} nodes
   */
  destination['append'] = function () {
    for (var _len2 = arguments.length, nodes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      nodes[_key2] = arguments[_key2];
    }

    // TODO: Fix this for when one of `nodes` is a DocumentFragment!
    var connectedBefore = /** @type {!Array<!Node>} */nodes.filter(function (node) {
      // DocumentFragments are not connected and will not be added to the list.
      return node instanceof Node && _Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](node);
    });

    builtIn.append.apply(this, nodes);

    for (var i = 0; i < connectedBefore.length; i++) {
      internals.disconnectTree(connectedBefore[i]);
    }

    if (_Utilities_js__WEBPACK_IMPORTED_MODULE_1__["isConnected"](this)) {
      for (var _i2 = 0; _i2 < nodes.length; _i2++) {
        var node = nodes[_i2];
        if (node instanceof Element) {
          internals.connectTree(node);
        }
      }
    }
  };
});;

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/Patch/Native.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/Patch/Native.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  Document_createElement: window.Document.prototype.createElement,
  Document_createElementNS: window.Document.prototype.createElementNS,
  Document_importNode: window.Document.prototype.importNode,
  Document_prepend: window.Document.prototype['prepend'],
  Document_append: window.Document.prototype['append'],
  Node_cloneNode: window.Node.prototype.cloneNode,
  Node_appendChild: window.Node.prototype.appendChild,
  Node_insertBefore: window.Node.prototype.insertBefore,
  Node_removeChild: window.Node.prototype.removeChild,
  Node_replaceChild: window.Node.prototype.replaceChild,
  Node_textContent: Object.getOwnPropertyDescriptor(window.Node.prototype, 'textContent'),
  Element_attachShadow: window.Element.prototype['attachShadow'],
  Element_innerHTML: Object.getOwnPropertyDescriptor(window.Element.prototype, 'innerHTML'),
  Element_getAttribute: window.Element.prototype.getAttribute,
  Element_setAttribute: window.Element.prototype.setAttribute,
  Element_removeAttribute: window.Element.prototype.removeAttribute,
  Element_getAttributeNS: window.Element.prototype.getAttributeNS,
  Element_setAttributeNS: window.Element.prototype.setAttributeNS,
  Element_removeAttributeNS: window.Element.prototype.removeAttributeNS,
  Element_insertAdjacentElement: window.Element.prototype['insertAdjacentElement'],
  Element_prepend: window.Element.prototype['prepend'],
  Element_append: window.Element.prototype['append'],
  Element_before: window.Element.prototype['before'],
  Element_after: window.Element.prototype['after'],
  Element_replaceWith: window.Element.prototype['replaceWith'],
  Element_remove: window.Element.prototype['remove'],
  HTMLElement: window.HTMLElement,
  HTMLElement_innerHTML: Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'innerHTML'),
  HTMLElement_insertAdjacentElement: window.HTMLElement.prototype['insertAdjacentElement']
});

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/Patch/Node.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/Patch/Node.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native.js */ "./node_modules/@onsenui/custom-elements/src/Patch/Native.js");
/* harmony import */ var _CustomElementInternals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomElementInternals.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js");
/* harmony import */ var _Utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities.js */ "./node_modules/@onsenui/custom-elements/src/Utilities.js");




/**
 * @param {!CustomElementInternals} internals
 */
/* harmony default export */ __webpack_exports__["default"] = (function (internals) {
  // `Node#nodeValue` is implemented on `Attr`.
  // `Node#textContent` is implemented on `Attr`, `Element`.

  _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["setPropertyUnchecked"](Node.prototype, 'insertBefore',
  /**
   * @this {Node}
   * @param {!Node} node
   * @param {?Node} refNode
   * @return {!Node}
   */
  function (node, refNode) {
    if (node instanceof DocumentFragment) {
      var insertedNodes = Array.prototype.slice.apply(node.childNodes);
      var _nativeResult = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_insertBefore.call(this, node, refNode);

      // DocumentFragments can't be connected, so `disconnectTree` will never
      // need to be called on a DocumentFragment's children after inserting it.

      if (_Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](this)) {
        for (var i = 0; i < insertedNodes.length; i++) {
          internals.connectTree(insertedNodes[i]);
        }
      }

      return _nativeResult;
    }

    var nodeWasConnected = _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](node);
    var nativeResult = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_insertBefore.call(this, node, refNode);

    if (nodeWasConnected) {
      internals.disconnectTree(node);
    }

    if (_Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](this)) {
      internals.connectTree(node);
    }

    return nativeResult;
  });

  _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["setPropertyUnchecked"](Node.prototype, 'appendChild',
  /**
   * @this {Node}
   * @param {!Node} node
   * @return {!Node}
   */
  function (node) {
    if (node instanceof DocumentFragment) {
      var insertedNodes = Array.prototype.slice.apply(node.childNodes);
      var _nativeResult2 = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_appendChild.call(this, node);

      // DocumentFragments can't be connected, so `disconnectTree` will never
      // need to be called on a DocumentFragment's children after inserting it.

      if (_Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](this)) {
        for (var i = 0; i < insertedNodes.length; i++) {
          internals.connectTree(insertedNodes[i]);
        }
      }

      return _nativeResult2;
    }

    var nodeWasConnected = _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](node);
    var nativeResult = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_appendChild.call(this, node);

    if (nodeWasConnected) {
      internals.disconnectTree(node);
    }

    if (_Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](this)) {
      internals.connectTree(node);
    }

    return nativeResult;
  });

  _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["setPropertyUnchecked"](Node.prototype, 'cloneNode',
  /**
   * @this {Node}
   * @param {boolean=} deep
   * @return {!Node}
   */
  function (deep) {
    var clone = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_cloneNode.call(this, deep);
    // Only create custom elements if this element's owner document is
    // associated with the registry.
    if (!this.ownerDocument.__CE_hasRegistry) {
      internals.patchTree(clone);
    } else {
      internals.patchAndUpgradeTree(clone);
    }
    return clone;
  });

  _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["setPropertyUnchecked"](Node.prototype, 'removeChild',
  /**
   * @this {Node}
   * @param {!Node} node
   * @return {!Node}
   */
  function (node) {
    var nodeWasConnected = _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](node);
    var nativeResult = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_removeChild.call(this, node);

    if (nodeWasConnected) {
      internals.disconnectTree(node);
    }

    return nativeResult;
  });

  _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["setPropertyUnchecked"](Node.prototype, 'replaceChild',
  /**
   * @this {Node}
   * @param {!Node} nodeToInsert
   * @param {!Node} nodeToRemove
   * @return {!Node}
   */
  function (nodeToInsert, nodeToRemove) {
    if (nodeToInsert instanceof DocumentFragment) {
      var insertedNodes = Array.prototype.slice.apply(nodeToInsert.childNodes);
      var _nativeResult3 = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_replaceChild.call(this, nodeToInsert, nodeToRemove);

      // DocumentFragments can't be connected, so `disconnectTree` will never
      // need to be called on a DocumentFragment's children after inserting it.

      if (_Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](this)) {
        internals.disconnectTree(nodeToRemove);
        for (var i = 0; i < insertedNodes.length; i++) {
          internals.connectTree(insertedNodes[i]);
        }
      }

      return _nativeResult3;
    }

    var nodeToInsertWasConnected = _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](nodeToInsert);
    var nativeResult = _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_replaceChild.call(this, nodeToInsert, nodeToRemove);
    var thisIsConnected = _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](this);

    if (thisIsConnected) {
      internals.disconnectTree(nodeToRemove);
    }

    if (nodeToInsertWasConnected) {
      internals.disconnectTree(nodeToInsert);
    }

    if (thisIsConnected) {
      internals.connectTree(nodeToInsert);
    }

    return nativeResult;
  });

  function patch_textContent(destination, baseDescriptor) {
    Object.defineProperty(destination, 'textContent', {
      enumerable: baseDescriptor.enumerable,
      configurable: true,
      get: baseDescriptor.get,
      set: /** @this {Node} */function set(assignedValue) {
        // If this is a text node then there are no nodes to disconnect.
        if (this.nodeType === Node.TEXT_NODE) {
          baseDescriptor.set.call(this, assignedValue);
          return;
        }

        var removedNodes = undefined;
        // Checking for `firstChild` is faster than reading `childNodes.length`
        // to compare with 0.
        if (this.firstChild) {
          // Using `childNodes` is faster than `children`, even though we only
          // care about elements.
          var childNodes = this.childNodes;
          var childNodesLength = childNodes.length;
          if (childNodesLength > 0 && _Utilities_js__WEBPACK_IMPORTED_MODULE_2__["isConnected"](this)) {
            // Copying an array by iterating is faster than using slice.
            removedNodes = new Array(childNodesLength);
            for (var i = 0; i < childNodesLength; i++) {
              removedNodes[i] = childNodes[i];
            }
          }
        }

        baseDescriptor.set.call(this, assignedValue);

        if (removedNodes) {
          for (var _i = 0; _i < removedNodes.length; _i++) {
            internals.disconnectTree(removedNodes[_i]);
          }
        }
      }
    });
  }

  if (_Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_textContent && _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_textContent.get) {
    patch_textContent(Node.prototype, _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_textContent);
  } else {
    internals.addPatch(function (element) {
      patch_textContent(element, {
        enumerable: true,
        configurable: true,
        // NOTE: This implementation of the `textContent` getter assumes that
        // text nodes' `textContent` getter will not be patched.
        get: /** @this {Node} */function get() {
          /** @type {!Array<string>} */
          var parts = [];

          for (var i = 0; i < this.childNodes.length; i++) {
            parts.push(this.childNodes[i].textContent);
          }

          return parts.join('');
        },
        set: /** @this {Node} */function set(assignedValue) {
          while (this.firstChild) {
            _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_removeChild.call(this, this.firstChild);
          }
          _Native_js__WEBPACK_IMPORTED_MODULE_0__["default"].Node_appendChild.call(this, document.createTextNode(assignedValue));
        }
      });
    });
  }
});;

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/Utilities.js":
/*!****************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/Utilities.js ***!
  \****************************************************************/
/*! exports provided: isValidCustomElementName, isConnected, walkDeepDescendantElements, setPropertyUnchecked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCustomElementName", function() { return isValidCustomElementName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isConnected", function() { return isConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkDeepDescendantElements", function() { return walkDeepDescendantElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPropertyUnchecked", function() { return setPropertyUnchecked; });
var reservedTagList = new Set(['annotation-xml', 'color-profile', 'font-face', 'font-face-src', 'font-face-uri', 'font-face-format', 'font-face-name', 'missing-glyph']);

/**
 * @param {string} localName
 * @returns {boolean}
 */
function isValidCustomElementName(localName) {
  var reserved = reservedTagList.has(localName);
  var validForm = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(localName);
  return !reserved && validForm;
}

/**
 * @private
 * @param {!Node} node
 * @return {boolean}
 */
function isConnected(node) {
  // Use `Node#isConnected`, if defined.
  var nativeValue = node.isConnected;
  if (nativeValue !== undefined) {
    return nativeValue;
  }

  /** @type {?Node|undefined} */
  var current = node;
  while (current && !(current.__CE_isImportDocument || current instanceof Document)) {
    current = current.parentNode || (window.ShadowRoot && current instanceof ShadowRoot ? current.host : undefined);
  }
  return !!(current && (current.__CE_isImportDocument || current instanceof Document));
}

/**
 * @param {!Node} root
 * @param {!Node} start
 * @return {?Node}
 */
function nextSiblingOrAncestorSibling(root, start) {
  var node = start;
  while (node && node !== root && !node.nextSibling) {
    node = node.parentNode;
  }
  return !node || node === root ? null : node.nextSibling;
}

/**
 * @param {!Node} root
 * @param {!Node} start
 * @return {?Node}
 */
function nextNode(root, start) {
  return start.firstChild ? start.firstChild : nextSiblingOrAncestorSibling(root, start);
}

/**
 * @param {!Node} root
 * @param {!function(!Element)} callback
 * @param {!Set<Node>=} visitedImports
 */
function walkDeepDescendantElements(root, callback) {
  var visitedImports = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Set();

  var node = root;
  while (node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      var element = /** @type {!Element} */node;

      callback(element);

      var localName = element.localName;
      if (localName === 'link' && element.getAttribute('rel') === 'import') {
        // If this import (polyfilled or not) has it's root node available,
        // walk it.
        var importNode = /** @type {!Node} */element.import;
        if (importNode instanceof Node && !visitedImports.has(importNode)) {
          // Prevent multiple walks of the same import root.
          visitedImports.add(importNode);

          for (var child = importNode.firstChild; child; child = child.nextSibling) {
            walkDeepDescendantElements(child, callback, visitedImports);
          }
        }

        // Ignore descendants of import links to prevent attempting to walk the
        // elements created by the HTML Imports polyfill that we just walked
        // above.
        node = nextSiblingOrAncestorSibling(root, element);
        continue;
      } else if (localName === 'template') {
        // Ignore descendants of templates. There shouldn't be any descendants
        // because they will be moved into `.content` during construction in
        // browsers that support template but, in case they exist and are still
        // waiting to be moved by a polyfill, they will be ignored.
        node = nextSiblingOrAncestorSibling(root, element);
        continue;
      }

      // Walk shadow roots.
      var shadowRoot = element.__CE_shadowRoot;
      if (shadowRoot) {
        for (var _child = shadowRoot.firstChild; _child; _child = _child.nextSibling) {
          walkDeepDescendantElements(_child, callback, visitedImports);
        }
      }
    }

    node = nextNode(root, node);
  }
}

/**
 * Used to suppress Closure's "Modifying the prototype is only allowed if the
 * constructor is in the same scope" warning without using
 * `@suppress {newCheckTypes, duplicate}` because `newCheckTypes` is too broad.
 *
 * @param {!Object} destination
 * @param {string} name
 * @param {*} value
 */
function setPropertyUnchecked(destination, name, value) {
  destination[name] = value;
}

/***/ }),

/***/ "./node_modules/@onsenui/custom-elements/src/custom-elements.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@onsenui/custom-elements/src/custom-elements.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomElementInternals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomElementInternals.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementInternals.js");
/* harmony import */ var _CustomElementRegistry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomElementRegistry.js */ "./node_modules/@onsenui/custom-elements/src/CustomElementRegistry.js");
/* harmony import */ var _Patch_HTMLElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Patch/HTMLElement.js */ "./node_modules/@onsenui/custom-elements/src/Patch/HTMLElement.js");
/* harmony import */ var _Patch_Document_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Patch/Document.js */ "./node_modules/@onsenui/custom-elements/src/Patch/Document.js");
/* harmony import */ var _Patch_Node_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Patch/Node.js */ "./node_modules/@onsenui/custom-elements/src/Patch/Node.js");
/* harmony import */ var _Patch_Element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Patch/Element.js */ "./node_modules/@onsenui/custom-elements/src/Patch/Element.js");
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */









var priorCustomElements = window['customElements'];

if (!priorCustomElements || priorCustomElements['forcePolyfill'] || typeof priorCustomElements['define'] != 'function' || typeof priorCustomElements['get'] != 'function') {
  /** @type {!CustomElementInternals} */
  var internals = new _CustomElementInternals_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

  Object(_Patch_HTMLElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(internals);
  Object(_Patch_Document_js__WEBPACK_IMPORTED_MODULE_3__["default"])(internals);
  Object(_Patch_Node_js__WEBPACK_IMPORTED_MODULE_4__["default"])(internals);
  Object(_Patch_Element_js__WEBPACK_IMPORTED_MODULE_5__["default"])(internals);

  // The main document is always associated with the registry.
  document.__CE_hasRegistry = true;

  /** @type {!CustomElementRegistry} */
  var customElements = new _CustomElementRegistry_js__WEBPACK_IMPORTED_MODULE_1__["default"](internals);

  Object.defineProperty(window, 'customElements', {
    configurable: true,
    enumerable: true,
    value: customElements
  });
}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js!./core/src/elements/mui-dialog/index.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src!./core/src/elements/mui-dialog/index.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mui-dialog{overflow:hidden;-ms-touch-action:manipulation;touch-action:manipulation}.dialog__mask,mui-dialog{position:absolute;top:0;bottom:0;left:0;right:0}.dialog__mask{padding:0;margin:0;border:none;background-color:rgba(0, 0, 0, .4)}.dialog__wrapper{position:absolute;background-color:#fff;width:28rem;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:.8rem}.dialog__footer,.dialog__header{height:4.4rem;font-size:1.6rem;line-height:4.4rem;text-align:center}.dialog__footer,.dialog__header{-webkit-box-sizing:border-box;box-sizing:border-box}.dialog__footer{border-top:1px solid #ddd}.dialog__body{padding:1.5rem;min-height:3rem;font-size:1.6rem;text-align:center}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })

/******/ });
//# sourceMappingURL=dialog.bundle.js.map