# MeetUI
A pure JavaScript UI framework for mobile !

features
- (1) web component
- (2) easy to use
- (3) friendly for mobile


## use
```html
    <template id="confirm-dialog.html">
        <mui-confirm-dialog id="my-dialog"></mui-confirm-dialog>
    </template>

    <mui-confirm-dialog id="my-dialog2" conf-message="diaglog2的信息" ></mui-confirm-dialog>


    <button id="btn1">show: 方式一</button>
    <button id="btn2">show: 方式二</button>
```

```javascript
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

```

## develop

### npm install

### npm run watch [module]