import './index.css'
import '../../core/css/common.css'
import mui from  '../../core/src/index.esm'
import '@ele/mui-popup/index'

import eruda from 'eruda'
eruda.init();


// 方式一
var myPopup = document.getElementById('my-popup');
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    myPopup.show();
});

var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function () {
    myPopup.setAttribute('header', document.getElementById('input').value)
});


// 方式二
mui.createElement('popup.html', {
    header: '方式二标题',
    textAlign: 'center'
});
var myPopup2 = document.getElementById('my-popup2');
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
    myPopup2.show();
});

