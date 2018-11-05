## popup

## 方式一
```html
<template id="confirm-dialog.html">
    <mui-dialog id="my-dialog">
        <div class="dialog__header">头部信息</div>
        <div class="dialog__body">
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
        </div>
        <div class="dialog__footer">关闭</div>
    </mui-dialog>
</template>
```

### JS API
```javascript
// 创建dialog
mui.createElement('confirm-dialog.html',{ scrollSelector: '.dialog__body' });

var dialog = document.getElementById('my-dialog'),
    showBtnEl = document.querySelector('#btn1'),
    closeEl = document.querySelector('#my-dialog').querySelector('.dialog__footer');

showBtnEl.addEventListener('click', function() {
    dialog.show();
});

closeEl.addEventListener('click', function() {
    dialog.hide();
});

```

## 方式二
```html
    <mui-dialog id="my-dialog2">
        <div class="dialog__header">头部信息</div>
        <div class="dialog__body">
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
            <p>大段的文字...</p>
        </div>
        <div class="dialog__footer">关闭</div>
    </mui-dialog>
```

### JS API
```javascript
//方式二
var dialog2 = document.getElementById('my-dialog2');
var btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function () {
    dialog2.show();
});


```