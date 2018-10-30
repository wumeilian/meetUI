import mui from  '../../core/src/index.esm'
import '@ele/mui-dialog/index'

// 创建dialog
mui.createElement('confirm-dialog.html',{});

var dialog = document.getElementById('my-dialog'),
    showBtnEl = document.querySelector('#btn1'),
    closeEl = document.querySelector('#my-dialog').querySelector('.dialog__footer');

showBtnEl.addEventListener('click', function() {
    dialog.show();
});

closeEl.addEventListener('click', function() {
    dialog.hide();
});

