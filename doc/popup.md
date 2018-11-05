## popup

## 方式一
### HTML
```html
<button id="btn">按钮</button>

<mui-popup conf-header="自定义标题" id="my-popup">
        自定义内容和文字
</mui-popup>
```

### JS API
```javascript
var myPopup = document.getElementById('my-popup');
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    myPopup.show();
})

```
## 方式二
### HTML
```html
<template id="popup.html">
    <mui-popup id="my-popup2">
        <a href="http://www.meiyou.com">www.meiyou.com</a>
    </mui-popup>
</template>
```
### JS API
```javascript
// 创建popup
mui.createElement('popup.html', {
    conf: {
        header: '方式二标题',
        textAlign: 'center'
    }
});
var myPopup2 = document.getElementById('my-popup2');
var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
    myPopup2.show();
})
```