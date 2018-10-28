import './index.css';
import BaseDialogElement from '../base/base-dialog';

export default class DialogElement extends BaseDialogElement{

    constructor(){
        super()
    }

    _compile(){
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

        const content = document.createDocumentFragment();
        const mask = document.createElement('div');
        mask.classList.add('dialog__mask');

        this.insertBefore(mask, this.children[0])

    }
}

customElements.define('mui-dialog', DialogElement);