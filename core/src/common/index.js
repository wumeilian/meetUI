import util from './libs/util'
import platform from './libs/platform'

const mui = {
    util,
    platform
};

mui.createElement = function (selector, options = {}) {
    const element = util.createElement(selector, options);
    let target = options.append && options.append instanceof HTMLElement ? options.append : document.body;

    console.log(element);

    target.insertBefore(element, options.insertBefore || null);
    return element;
};


export default mui;