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

    // life-cycle 首次插入到DOM时调用
    connectedCallback(){
        console.log('connectedCallback，life-cycle 首次插入到DOM');
    }

    // life-cycle 属性变化时
    attributeChangedCallback(){
        console.log('attributeChangedCallback, life-cycle 属性变化时');
    }

    // life-cycle 被移除时
    disconnectedCallback(){
        console.log('attributeChangedCallback, life-cycle 从DOM移除时');
    }

}