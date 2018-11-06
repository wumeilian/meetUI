require('babel-polyfill');
const gulp = require('gulp');
const del = require('del');
const postcss = require('gulp-postcss');
const { buildModule, commonRollupConfig } = require('./rollup.config');
const { rollup } = require('rollup');
const modules = require('./scripts/libs/findModules');


const bundle = config => rollup(config).then(bundle => bundle.write(config.output));


gulp.task('clear', (cb) => {
    del([
        'dist/**'
    ],cb())
});

gulp.task('build', ['clear'], () => {

    //（1）构建公共代码，输出mui.js
    bundle(commonRollupConfig);

    //（2）编译common.css
    gulp.src('./core/css/common.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dist'));

    //（3）构建每个component
    modules.forEach(comp => {
        bundle(buildModule(comp))
    })

});