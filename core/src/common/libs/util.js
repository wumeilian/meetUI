const util = {};


/**
 * @param {String/Function} query dot class name or node name or matcher function.
 * @return {Function}
 */
util.prepareQuery = (query) => {
    return query instanceof Function ? query : (element) => util.match(element, query);
};

/**
 * @param {Element} e
 * @param {String/Function} s CSS Selector.
 * @return {Boolean}
 */
util.match = (e, s) => (e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector).call(e, s);

/**
 * @param {Element} element
 * @param {String/Function} query dot class name or node name or matcher function.
 * @return {HTMLElement/null}
 */
util.findChild = (element, query) => {
    const match = util.prepareQuery(query);

    // Caution: `element.children` is `undefined` in some environments if `element` is `svg`
    for (let i = 0; i < element.childNodes.length; i++) {
        const node = element.childNodes[i];
        if (node.nodeType !== Node.ELEMENT_NODE) { // process only element nodes
            continue;
        }
        if (match(node)) {
            return node;
        }
    }
    return null;
};

util.isInstance = (obj, instance) => {
    return Object.prototype.toString.call(obj).toLowerCase() === `[object ${instance.toLowerCase()}]`
};

util.createElement = (IDSelector, options) => {
    const template = document.getElementById(IDSelector).content;
    util.setAttrOptions(template, options);
    const cloneTemplate = document.importNode(template, true);
    document.body.appendChild(cloneTemplate)
};

util.setAttrOptions = (template, options) => {
    for(let key in options){
        let typ = document.createAttribute(`conf-${key}`);
        typ.value = options[key];
        template.firstElementChild.attributes.setNamedItem(typ);
    }
};

/**
 * 阻止元素外的滚动，常用来做阻止iOS滚动穿透
 * 主要原理，containerEl中除了content的部分全部阻止touchmove事件，content中检测上下滚动是否到极限，若到极限也阻止
 */
util.elementOutSidePreventScroll = (containerEl, contentSelector) => {

    const data = {
        maxscroll: 0
    };

    containerEl.addEventListener('touchstart', function(event){
        const elTarget = event.target;
        let contentEl = containerEl.querySelector(contentSelector);

        if(elTarget.classList.contains(contentSelector) || util.getClosest(elTarget, contentSelector) !== null){

            data.scrollY = contentEl.scrollTop;
            data.posY = (event.targetTouches[0] || event).pageY;
            data.maxscroll = contentEl.scrollHeight - contentEl.clientHeight;
            data.elScroll = elTarget;
        }
        else{
            data.elScroll = null;
        }
    });

    containerEl.addEventListener('touchmove', function(event){
        if(!data.elScroll){
            event.preventDefault();
        }
        if(event.maxscroll<=0){
            event.preventDefault();
        }

        let contentEl = containerEl.querySelector(contentSelector);

        // 现在移动的垂直位置，用来判断是往上移动还是往下
        let events = event.targetTouches[0] || event;
        // 当前的滚动高度
        let scrollTop = contentEl.scrollTop;

        // 移动距离
        let distanceY = events.pageY - data.posY;

        // 上下边缘检测
        if (distanceY > 0 && scrollTop == 0) {
            // 往上滑，并且到头
            // 禁止滚动的默认行为
            event.preventDefault();
            return;
        }

        // 下边缘检测
        if (distanceY < 0 && (scrollTop + 1 >= data.maxscroll)) {
            // 往下滑，并且到头
            // 禁止滚动的默认行为
            event.preventDefault();
            return;
        }
    });
};

util.getClosest = function (elem, selector) {
    // Get the closest matching element
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }
    return null;

};

export default util;