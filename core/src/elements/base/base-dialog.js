import BaseElement from './base-element';

export default class BaseDialogElement extends BaseElement{

    constructor(){
        super()
    }

    // 显隐转换
    _toggleStyle(shouldShow){
        this.style.display = shouldShow? 'block' : 'none';
    }

    _setVisible(shouldShow){
        this._toggleStyle(shouldShow)
    }

    show(){
        this._setVisible(true)
    }

    hide(){
        this._setVisible(false)
    }
}