import './index.css'
import '../../core/css/common.css'
import mui from  '../../core/src/index.esm'
import '@ele/mui-confirm-dialog/index'

import eruda from 'eruda'
eruda.init();

// 创建dialog
// 方式一
mui.createElement('confirm-dialog.html', {
    conf: {
        message: '这里是显示的message信息',
        cancel: '取消',
        confirm: '确定'
    }
});

var dialog = document.getElementById('my-dialog'),
    showBtnEl = document.querySelector('#btn1');

showBtnEl.addEventListener('click', function() {
    dialog.show();
});

// 方式二
var dialog2 = document.getElementById('my-dialog2'),
    showBtnEl2 = document.querySelector('#btn2');

showBtnEl2.addEventListener('click', function() {
    dialog2.show();
});