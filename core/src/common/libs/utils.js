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
    const cloneTemplate = document.importNode(template, true);
    document.body.appendChild(cloneTemplate)
};

export default util;