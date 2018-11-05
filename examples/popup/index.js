import './index.css'
import '../../core/css/common.css'
import mui from  '../../core/src/index.esm'
import '@ele/mui-popup/index'

import eruda from 'eruda'
eruda.init();

var myPopup = document.getElementById('my-popup');
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    myPopup.show();
})