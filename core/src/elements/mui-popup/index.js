import './index.css';
import BaseDialogElement from '../base/base-dialog';
import util from '../../common/libs/util';
import { merge, isType } from '../../common/libs/commonUtils';

const textObj = {
    header: '顶部标题'
};

const scheme = {
    scrollContainer: '.popup__body'
};

export default class PopupElement extends BaseDialogElement{

    constructor(){
        super();

        this._compile();
        this._triggerEvent = this._triggerEvent.bind(this);
        this._animateData = {
            show: [
                {
                    el: this._mask,
                    style: 'masker-showUp'
                },
                {
                    el: this._popup,
                    style: 'popup-bounceInUp',
                    animateHookEnable: true
                }
            ],
            hide: [
                {
                    el: this._mask,
                    style: 'popup-fadeOut'
                },
                {
                    el: this._popup,
                    style: 'popup-slideDown'
                }
            ]
        }
    }

    get _mask() {
        return util.findChild(this, '.popup__mask');
    }

    get _popup() {
        return util.findChild(this, '.popup__wrapper')
    }

    get _popupBody() {
        return this.querySelector('.popup__body')
    }

    get _closeEl(){
        return this.querySelector('.header__close');
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
         * <mui-popup class="mui-popup" style="none">
         *   <div class="popup__mask"></div>
         *   <div class="popup__wrapper">
         *      <div class="popup__container">
         *          <div class="popup__header line-bottom">
         *              <div class="header__label"></div>
         *              <div class="header__close"></div>
         *          </div>
         *          <div class="popup__body"></div>
         *      </div>
         *   </div>
         * </mui-popup>
         */

        // 创建一个fragment暂时存放mui-dialog中的所有子元素
        const content = document.createDocumentFragment();
        while (this.firstChild) {
            content.appendChild(this.firstChild);
        }

            // 设置的可滚动区域
        const scAttr = util.getConfAttr.call(this);
        const text = merge(textObj, scAttr);

        const template = `
            <div class="popup__mask"></div>
            <div class="popup__wrapper">
               <div class="popup__container">
                  <div class="popup__header line-bottom popup__header--${text.textAlign ? text.textAlign : 'left'}">
                       <div class="header__label">${text.header}</div>
                       <div class="header__close"></div>
                   </div>
                   <div class="popup__body"></div>
               </div>
            </div>
        `;

        // String HTML 插入到DOM中
        this.insertAdjacentHTML('beforeend', template);

        // 内容子元素插入到popup__body 中
        this._popupBody.append(content);

        this._mask.style.zIndex = 20000;
        this._popup.style.zIndex = 20001;


        // 监听取消按钮点击事件
        this._closeEl.addEventListener('click', () => {
            if(this.close && isType(this.close, 'function')){
                this.close()
            }
            this._setVisible(false);
        })

        // 设置的可滚动区域
        const selector = scAttr['conf-scrollSelector'];
        const scrollSelector = selector? selector.value : scheme.scrollContainer;
        util.elementOutSidePreventScroll(this, scrollSelector)

    }
}

customElements.define('mui-popup', PopupElement);