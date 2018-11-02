import './index.css';
import BaseDialogElement from '../base/base-dialog';
import util from '../../common/libs/util'

const scheme = {
    scrollContainer: '.dialog__container'
};

export default class DialogElement extends BaseDialogElement{

    constructor(){
        super();

        this._compile();
    }

    get _mask() {
        return util.findChild(this, '.dialog__mask');
    }

    get _dialog() {
        return util.findChild(this, '.dialog__wrapper')
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

        // 创建一个fragment暂时存放mui-dialog中的所有子元素
        const content = document.createDocumentFragment();
        while (this.firstChild) {
            content.appendChild(this.firstChild);
        }

        // 创建mask和wrapper
        const mask = document.createElement('div');
        mask.classList.add('dialog__mask');

        const wrapper = document.createElement('div');
        wrapper.classList.add('dialog__wrapper');

        const container = document.createElement('div');
        container.classList.add('dialog__container');
        wrapper.appendChild(container);

        this.appendChild(mask);
        this.appendChild(wrapper);

        // container中放入自定义子元素片段
        this._dialog.children[0].append(content);
        this._mask.style.zIndex = 20000;
        this._dialog.style.zIndex = 20001;

        // 设置的可滚动区域
        const scAttr = this.attributes['conf-scrollSelector'];
        const scrollSelector = scAttr? scAttr.value : scheme.scrollContainer;
        util.elementOutSidePreventScroll(this, scrollSelector)
    }
}

customElements.define('mui-dialog', DialogElement);