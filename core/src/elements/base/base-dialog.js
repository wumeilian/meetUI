import BaseElement from './base-element';
import util from '../../common/libs/util';

export default class BaseDialogElement extends BaseElement{

    constructor(){
        super();
        this._cancel = this._cancel.bind(this);
    }

    // 显隐转换
    _toggleStyle(shouldShow){
        this.style.display = shouldShow? 'block' : 'none';
    }

    _setVisible(shouldShow){
        this._toggleStyle(shouldShow)
    }

    // 是否html noscroll
    _setNoScroll(isNoScroll){
        if(isNoScroll){
            document.querySelector('html').classList.add('noscroll')
        }
        else {
            document.querySelector('html').classList.remove('noscroll')
        }
    }

    _cancel() {
        console.log('点击了cancel');
        this._setVisible(false)
        this._setNoScroll(false);
    }

    show() {
        this._setVisible(true);
        this._setNoScroll(true);
    }

    hide() {
        this._setVisible(false);
        this._setNoScroll(false);
    }

    // life-cycle 首次插入到DOM时调用
    connectedCallback(){
        util.colorLog('connectedCallback，life-cycle 首次插入到DOM');

        // 移除所有attr
        util.clearConfAttr.call(this);

        if(this._mask){
            this._mask.addEventListener('click', this._cancel)
        }
    }

    // life-cycle 属性变化时
    attributeChangedCallback(){
        util.colorLog('attributeChangedCallback, life-cycle 属性变化时');
    }

    // life-cycle 被移除时
    disconnectedCallback(){
        console.log('attributeChangedCallback, life-cycle 从DOM移除时');
    }

}