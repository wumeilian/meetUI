import mui from  '../../core/src/index.esm'
import '@ele/mui-dialog/index'

mui.createElement('confirm-dialog.html',{});

var dialog = document.getElementById('my-dialog');

document.querySelector('#btn1').addEventListener('click', function() {
    dialog.show();
});
