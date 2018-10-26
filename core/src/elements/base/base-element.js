function getElementClass() {
    if (typeof HTMLElement !== 'function') { // case of Safari
        const BaseElement = () => {};
        BaseElement.prototype = document.createElement('div');
        return BaseElement;
    } else {
        return HTMLElement;
    }
}

export default class BaseElement extends getElementClass() {
    constructor() {
        super();
    }
}
