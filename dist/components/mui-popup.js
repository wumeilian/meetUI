'use strict';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "mui-popup{display:none;overflow:hidden;-ms-touch-action:manipulation;touch-action:manipulation}mui-popup,mui-popup .popup__mask{position:fixed;top:0;bottom:0;left:0;right:0}mui-popup .popup__mask{padding:0;margin:0;border:none;background-color:#000000;background-color:rgba(0, 0, 0, .4)}mui-popup .popup__wrapper{position:fixed;background-color:#fff;width:100%;bottom:0;border-top-left-radius:.8rem;border-top-right-radius:.8rem}mui-popup .popup__body{padding:1.5rem;overflow-x:hidden;overflow-y:auto;max-height:70vh;min-height:25vh}mui-popup .popup__header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;line-height:2rem;font-size:1.6rem;padding:1.5rem;text-align:center}mui-popup .popup__header--center{text-align:center}mui-popup .popup__header--left{text-align:left}mui-popup .popup__header .header__label{width:100%}mui-popup .popup__header .header__close{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'%3E%3Cpath fill-rule='evenodd' d='M24.008 21.852l8.97-8.968L31.092 11l-8.97 8.968L13.157 11l-1.884 1.884 8.968 8.968-9.24 9.24 1.884 1.885 9.24-9.24 9.24 9.24 1.885-1.884-9.24-9.24z'/%3E%3C/svg%3E\");background-repeat:no-repeat;height:2.8rem;width:2.8rem;position:absolute;right:1rem;top:1rem}.masker-showUp{-webkit-animation:muiFadeIn .2s linear;animation:muiFadeIn .2s linear}.popup-bounceInUp{-webkit-animation:muiBounceInUp .2s linear;animation:muiBounceInUp .2s linear}.popup-fadeOut{-webkit-animation:muiFadeOut .2s linear;animation:muiFadeOut .2s linear}.popup-slideDown{-webkit-animation:muiSlideOutDown .2s linear;animation:muiSlideOutDown .2s linear}";
styleInject(css);

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
    return Object.prototype.toString.call(obj).toLowerCase() === '[object ' + instance.toLowerCase() + ']';
};

util.createElement = function (IDSelector, options) {
    console.log('document.getElementById(IDSelector)', document.getElementById(IDSelector));
    var template = document.getElementById(IDSelector).content;
    console.log('template', template);
    util.setAttrOptions(template, options.conf || {});
    var cloneTemplate = document.importNode(template, true);
    console.log('cloneTemplate', cloneTemplate);
    return cloneTemplate;
};

util.setAttrOptions = function (template, options) {
    for (var key in options) {
        var typ = document.createAttribute('conf-' + key);
        typ.value = options[key];
        template.firstElementChild.attributes.setNamedItem(typ);
    }
};

/**
 * 阻止元素外的滚动，常用来做阻止iOS滚动穿透
 * 主要原理，containerEl中除了content的部分全部阻止touchmove事件，content中检测上下滚动是否到极限，若到极限也阻止
 */
util.elementOutSidePreventScroll = function (containerEl, contentSelector) {

    var data = {
        maxscroll: 0
    };

    containerEl.addEventListener('touchstart', function (event) {
        var elTarget = event.target;
        var contentEl = containerEl.querySelector(contentSelector);

        if (elTarget.classList.contains(contentSelector) || util.getClosest(elTarget, contentSelector) !== null) {

            data.scrollY = contentEl.scrollTop;
            data.posY = (event.targetTouches[0] || event).pageY;
            data.maxscroll = contentEl.scrollHeight - contentEl.clientHeight;
            data.elScroll = elTarget;
        } else {
            data.elScroll = null;
        }
    });

    containerEl.addEventListener('touchmove', function (event) {
        if (!data.elScroll) {
            event.preventDefault();
        }
        if (event.maxscroll <= 0) {
            event.preventDefault();
        }

        var contentEl = containerEl.querySelector(contentSelector);

        // 现在移动的垂直位置，用来判断是往上移动还是往下
        var events = event.targetTouches[0] || event;
        // 当前的滚动高度
        var scrollTop = contentEl.scrollTop;

        // 移动距离
        var distanceY = events.pageY - data.posY;

        // 上下边缘检测
        if (distanceY > 0 && scrollTop == 0) {
            // 往上滑，并且到头
            // 禁止滚动的默认行为
            event.preventDefault();
            return;
        }

        // 下边缘检测
        if (distanceY < 0 && scrollTop + 1 >= data.maxscroll) {
            // 往下滑，并且到头
            // 禁止滚动的默认行为
            event.preventDefault();
            return;
        }
    });
};

util.getClosest = function (elem, selector) {
    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;
};

util.colorLog = function (text, color) {
    console.log('%c ' + text, 'background: #222; color: ' + (color ? color : '#bada55'));
};

// 清除attr的方法，配置参数通过conf- 传递进来，所以创建完成后要通过此方法移除
util.clearConfAttr = function () {
    var _this = this;

    var confAttrs = [];
    var attrs = this.attributes;

    for (var i = 0; i < this.attributes.length; i++) {
        var attrNAme = attrs[i].name;
        if (attrNAme.indexOf('conf-') > -1) {
            confAttrs.push(attrNAme);
        }
    }

    confAttrs.forEach(function (item) {
        _this.removeAttribute(item);
    });
};

util.getConfAttr = function () {
    var conf = {};
    var attrs = this.attributes;

    for (var i = 0; i < this.attributes.length; i++) {
        var attrNAme = attrs[i].name;
        if (attrNAme.indexOf('conf-') > -1) {
            conf[attrNAme.replace('conf-', '')] = attrs[i].value;
        }
    }

    return conf;
};

/**
 * @param {Element} element
 * @param {String} eventName
 * @param {Object} [detail]
 * @return {CustomEvent}
 */
util.triggerElementEvent = function (target, eventName) {
    var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


    var event = new CustomEvent(eventName, {
        bubbles: true,
        cancelable: true,
        detail: detail
    });

    Object.keys(detail).forEach(function (key) {
        event[key] = detail[key];
    });

    target.dispatchEvent(event);

    return event;
};

util._transitionEndEvents = function () {
    return ["webkitAnimationEnd", "animationend"];
}();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function merge() /* obj1, obj2, obj3, ... */{
    var result = {};
    function assignValue(val, key) {
        if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
            result[key] = merge(result[key], val);
        } else {
            result[key] = val;
        }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
    }
    return result;
}

function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }

    // Force an array if not already something iterable
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
    }

    if (isType(obj, 'array')) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Iterate over object keys
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}

var isType = function isType(obj, type) {
    return Object.prototype.toString.call(obj).toLowerCase() === "[object " + type + "]";
};

var Animator = function Animator() {
    this.pfx = ["webkitAnimationEnd", "animationend"];
};

Animator.prototype.startElAnimate = function (el, style) {
    if (el.classList.contains(style)) {
        return;
    }
    el.classList.add(style);
};

Animator.prototype.animate = function (animateData, callback) {
    var _this = this;

    // 如果不存在、不是数组、数组长度未0 则返回
    if (!animateData) {
        return;
    }

    var animateObjArray = [];

    if (isType(animateData, 'object')) {
        animateObjArray.push(animateData);
    } else {
        animateObjArray = animateData;
    }

    this.fixAnimateData(animateObjArray);

    // 遍历各元素，增加动画
    animateObjArray.forEach(function (item) {
        var element = item.el;
        _this.startElAnimate(element, item.style);
        if (item.animateHookEnable) {
            _this.transitionEnd(element, animateObjArray, callback);
        }
    });
};

Animator.prototype.transitionEnd = function (element, animateData, callback) {
    if (!element) {
        return function () {};
    }
    var fn = function fn(event) {
        animateData.forEach(function (item) {
            item.el.classList.remove(item.style);
        });

        if (element == event.target) {
            event.stopPropagation();
            removeListeners();

            callback();
        }
    };

    var removeListeners = function removeListeners() {
        util._transitionEndEvents.forEach(function (eventName) {
            element.removeEventListener(eventName, fn, false);
        });
    };

    util._transitionEndEvents.forEach(function (eventName) {
        element.addEventListener(eventName, fn, false);
    });
};

// 如果没有指定hook，默认第一个
Animator.prototype.fixAnimateData = function (animateData) {

    // 寻找出需要作为动画结束钩子的节点
    var isSpecified = animateData.some(function (item) {
        return item.animateHookEnable === true;
    });

    if (!isSpecified) {
        animateData[0].animateHookEnable = true;
    }
};

var animator = new Animator();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseDialogElement = function (_BaseElement) {
    _inherits$1(BaseDialogElement, _BaseElement);

    function BaseDialogElement() {
        _classCallCheck$1(this, BaseDialogElement);

        var _this = _possibleConstructorReturn$1(this, (BaseDialogElement.__proto__ || Object.getPrototypeOf(BaseDialogElement)).call(this));

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
            var _this2 = this;

            var action = shouldShow ? 'show' : 'hide';

            // preshow/prehide事件
            util.triggerElementEvent(this, 'pre' + action, {});

            if (action === 'show') {
                if (!this._animateData) {
                    util.triggerElementEvent(this, 'post' + action, {});
                    this._toggleStyle(shouldShow);
                    return;
                }
                animator.animate(this._animateData[action], function () {
                    // postshow事件
                    util.triggerElementEvent(_this2, 'post' + action, {});
                });

                this._toggleStyle(shouldShow);
            } else {
                if (!this._animateData) {
                    util.triggerElementEvent(this, 'post' + action, {});
                    this._toggleStyle(shouldShow);
                    return;
                }
                animator.animate(this._animateData[action], function () {
                    _this2._toggleStyle(shouldShow);
                    // posthide事件
                    util.triggerElementEvent(_this2, 'post' + action, {});
                });
            }
        }

        // 是否html noscroll

    }, {
        key: '_setNoScroll',
        value: function _setNoScroll(isNoScroll) {
            if (isNoScroll) {
                document.querySelector('html').classList.add('noscroll');
            } else {
                document.querySelector('html').classList.remove('noscroll');
            }
        }
    }, {
        key: '_cancel',
        value: function _cancel() {
            console.log('点击了cancel');
            this._setVisible(false);
            this._setNoScroll(false);
        }
    }, {
        key: 'show',
        value: function show() {
            this._setVisible(true);
            this._setNoScroll(true);
        }
    }, {
        key: 'hide',
        value: function hide() {
            this._setVisible(false);
            this._setNoScroll(false);
        }

        // life-cycle 首次插入到DOM时调用

    }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
            util.colorLog('connectedCallback，life-cycle 首次插入到DOM');

            // 移除所有attr,会触发attributeChangedCallback，暂时去掉
            //util.clearConfAttr.call(this);

            console.log(this._mask);

            if (this._mask) {
                this._mask.addEventListener('click', this._cancel);
            }
        }

        // life-cycle 属性变化时

    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback() {
            util.colorLog('attributeChangedCallback, life-cycle 属性变化时');
        }

        // life-cycle 被移除时

    }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
            console.log('attributeChangedCallback, life-cycle 从DOM移除时');
        }
    }]);

    return BaseDialogElement;
}(BaseElement);

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var textObj = {
    header: '顶部标题'
};

var scheme = {
    scrollContainer: '.popup__body'
};

var PopupElement = function (_BaseDialogElement) {
    _inherits$2(PopupElement, _BaseDialogElement);

    function PopupElement() {
        _classCallCheck$2(this, PopupElement);

        var _this = _possibleConstructorReturn$2(this, (PopupElement.__proto__ || Object.getPrototypeOf(PopupElement)).call(this));

        _this._compile();
        _this._triggerEvent = _this._triggerEvent.bind(_this);
        _this._animateData = {
            show: [{
                el: _this._mask,
                style: 'masker-showUp'
            }, {
                el: _this._popup,
                style: 'popup-bounceInUp',
                animateHookEnable: true
            }],
            hide: [{
                el: _this._mask,
                style: 'popup-fadeOut'
            }, {
                el: _this._popup,
                style: 'popup-slideDown'
            }]
        };
        return _this;
    }

    _createClass$1(PopupElement, [{
        key: '_triggerEvent',
        value: function _triggerEvent(eventName, detail) {
            util.triggerElementEvent(this, eventName, detail);
        }
    }, {
        key: '_compile',
        value: function _compile() {
            var _this2 = this;

            this.style.display = 'none';
            this.style.zIndex = 10001;

            /**
             * dialog组件结构
             *
             * <mui-popup class="mui-popup" style="none">
             *   <div class="popup__mask"></div>
             *   <div class="popup__wrapper">
             *      <div class="popup__container">
             *          <div class="popup__header line-bottom">
             *              <div class="header__label"></div>
             *              <div class="header__close"></div>
             *          </div>
             *          <div class="popup__body"></div>
             *      </div>
             *   </div>
             * </mui-popup>
             */

            // 创建一个fragment暂时存放mui-dialog中的所有子元素
            var content = document.createDocumentFragment();
            while (this.firstChild) {
                content.appendChild(this.firstChild);
            }

            // 获取属性
            var scAttr = util.getConfAttr.call(this);
            var text = merge(textObj, scAttr);

            var template = '\n            <div class="popup__mask"></div>\n            <div class="popup__wrapper">\n               <div class="popup__container">\n                  <div class="popup__header line-bottom popup__header--' + (text.textAlign ? text.textAlign : 'left') + '">\n                       <div class="header__label">' + text.header + '</div>\n                       <div class="header__close"></div>\n                   </div>\n                   <div class="popup__body"></div>\n               </div>\n            </div>\n        ';

            // String HTML 插入到DOM中
            this.insertAdjacentHTML('beforeend', template);

            // 内容子元素插入到popup__body 中
            this._popupBody.append(content);

            this._mask.style.zIndex = 20000;
            this._popup.style.zIndex = 20001;

            // 监听取消按钮点击事件
            this._closeEl.addEventListener('click', function () {
                if (_this2.close && isType(_this2.close, 'function')) {
                    _this2.close();
                }
                _this2._setVisible(false);
            });

            // 设置的可滚动区域
            var selector = scAttr['conf-scrollSelector'];
            var scrollSelector = selector ? selector.value : scheme.scrollContainer;
            util.elementOutSidePreventScroll(this, scrollSelector);
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, oldValue, newValue) {
            console.log(name, oldValue, newValue);
            this.querySelector('.header__label').textContent = newValue;
        }
    }, {
        key: '_mask',
        get: function get() {
            return util.findChild(this, '.popup__mask');
        }
    }, {
        key: '_popup',
        get: function get() {
            return util.findChild(this, '.popup__wrapper');
        }
    }, {
        key: '_popupBody',
        get: function get() {
            return this.querySelector('.popup__body');
        }
    }, {
        key: '_closeEl',
        get: function get() {
            return this.querySelector('.header__close');
        }
    }], [{
        key: 'observedAttributes',
        get: function get() {
            return ['conf-header'];
        }
    }]);

    return PopupElement;
}(BaseDialogElement);


customElements.define('mui-popup', PopupElement);

module.exports = PopupElement;