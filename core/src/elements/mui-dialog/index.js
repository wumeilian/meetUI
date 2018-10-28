import BaseDialogElement from '../base/base-dialog';

export default class AlertDialogElement extends BaseDialogElement{

    constructor(){
        super()
    }

}

customElements.define('mui-alert-dialog', AlertDialogElement);