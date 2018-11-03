import './index.css';
import BaseDialogElement from '../base/base-dialog';
import util from '../../common/libs/util';
import { merge, isType } from '../../common/libs/commonUtils';

const textObj = {
    message: '这里是一条信息',
    cancel: '取消',
    confirm: '确定'
};

export default class ConfirmDialogElement extends BaseDialogElement{

    constructor(){
        super();

        this._compile();
        this._triggerEvent = this._triggerEvent.bind(this);
    }

    get _mask() {
        return util.findChild(this, '.dialog__mask');
    }

    get _dialog() {
        return util.findChild(this, '.dialog__wrapper')
    }

    get _cancelEl(){
        return this.querySelector('.dialog__cancel');
    }
    
    get _confirmEl(){
        return this.querySelector('.dialog__confirm');
    }


    _triggerEvent(eventName, detail){
        util.triggerElementEvent(this, eventName, detail);
    }
    
    _compile(){
        this.style.display = 'none';
        this.style.zIndex = 10001;

        /**
         * dialog组件结构
         *
         * <mui-confirm-dialog class="mui-dialog" style="none">
         *   <div class="dialog__mask"></div>
         *   <div class="dialog__wrapper">
         *      <div class="dialog__container">
         *          <div class="confirm__message"></div>
         *          <div class="dialog__footer">
         *             <div class="dialog__cancel"></div>
         *             <div class="dialog__confirm"></div>
         *          </div>
         *      </div>
         *   </div>
         * </mui-dialog>
         */

        // 设置的可滚动区域
        const scAttr = util.getConfAttr.call(this);
        const text = merge(textObj, scAttr);

        console.log('text', text);

        const template = `
         <div class="dialog__mask"></div>
            <div class="dialog__wrapper">
               <div class="dialog__container">
                   <div class="confirm__message">${text.message}</div>
                   <div class="dialog__footer">
                     <div class="dialog__cancel">${text.cancel}</div>
                     <div class="dialog__confirm">${text.confirm}</div>
                   </div>
              </div>
           </div>
        `;

        // String HTML 插入到DOM中
        this.insertAdjacentHTML('beforeend', template);

        util.colorLog('生命周期，插入到dom');

        this._mask.style.zIndex = 20000;
        this._dialog.style.zIndex = 20001;

        // 监听confirm按钮点击事件
        this._confirmEl.addEventListener('click', () => {
            if(this.confirm && isType(this.confirm, 'function')){
                this.confirm()
            }
            this._setVisible(false);
        });

        // 监听取消按钮点击事件
        this._cancelEl.addEventListener('click', () => {
            if(this.unConfirm && isType(this.unConfirm, 'function')){
                this.unConfirm()
            }
            this._setVisible(false);
        })
        
    }
}

customElements.define('mui-confirm-dialog', ConfirmDialogElement);