# MeetUI
A pure JavaScript UI framework for mobile !

features
- (1) web component
- (2) easy to use
- (3) friendly for mobile


## use
- [dialog](./doc/dialog.md)
- [confirm-dialog](./doc/confirm-dialog.md)
- [popup](./doc/popup.md)

## develop

### install npm modules
```
 npm install
```

### develop your module
```
npm run watch [module]
```

### build meetUI
```
npm run build
```

gulpfile.babel.js, 会自动寻找core/src/elements下的模块进行构建输出，包含以下内容
- js babel
- css的postcss处理
```
gulp.task('build', ['clear'], () => {
    modules.forEach(comp => {
        bundle(rollupConfig(comp))
    })
});
```

### 注意事项
- 使用css 变量
- 参考mui-popup 组件来写