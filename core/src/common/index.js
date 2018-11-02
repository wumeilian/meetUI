import util from './libs/util'

const mui = {
    util
};

mui.createElement = function (selector, options = {}) {
    const element = util.createElement(selector, options);
    let target = options.append && options.append instanceof HTMLElement ? options.append : document.body;

    target.insertBefore(element, options.insertBefore || null);
    return element;
};


export default mui;