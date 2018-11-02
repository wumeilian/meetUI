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

    dialog2.confirm = function () {
        console.log('点了确定');
    };

    dialog2.unConfirm = function () {
        console.log('点了取消');
    };

    // hook，组件有异步请求或动画时有用
    dialog2.addEventListener('preshow', function (e) {
        console.log('preshow', e);
    });

    dialog2.addEventListener('postshow', function (e) {
        console.log('postshow', e);
    });

    dialog2.addEventListener('prehide', function (e) {
        console.log('prehide', e);
    })

    dialog2.addEventListener('posthide', function (e) {
        console.log('posthide', e);
    })

```

## develop

### npm install

### npm run watch [module]