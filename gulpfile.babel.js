require('babel-polyfill');
const gulp = require('gulp');
const fs = require('fs');
const del = require('del');
const path = require('path');
const postcss = require('gulp-postcss');
const { buildModule, buildCommonRollup } = require('./rollup.config');
const { rollup } = require('rollup');
const modules = require('./scripts/libs/findModules');
const uglify = require('uglify-js')


const bundle = (config, isMinify) => rollup(config)
    .then(bundle => bundle.generate(config.output))
    .then(({ code }) => {
        if (isMinify) {
            var minified = uglify.minify(code, {
                output: {
                    ascii_only: true
                },
                compress: {
                    pure_funcs: ['makeMap']
                }
            }).code;
            return write(config.output.file, minified, true)
        } else {
            return write(config.output.file, code)
        }
    })


gulp.task('clear', (cb) => {
    del([
        'dist/**'
    ],cb())
});

gulp.task('build', ['clear'], () => {

    console.log(buildCommonRollup());

    //（2）编译common.css
    gulp.src('./core/css/common.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dist'));

    //（1）构建公共代码，输出mui.js
    bundle(buildCommonRollup());

    //（3）构建每个component
    modules.forEach(comp => {
        bundle(buildModule(comp))
    })

});

gulp.task('minify', ['clear'], () => {

    //（1）构建公共代码，输出mui.js
    bundle(buildCommonRollup(true), true);

    //（2）编译common.css
    gulp.src('./core/css/common.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dist'));

    //（3）构建每个component
    modules.forEach(comp => {
        bundle(buildModule(comp,true), true)
    })

});


function write (dest, code) {
    return new Promise((resolve, reject) => {
        function report (extra) {
            resolve()
        }
        let filePath = path.resolve(dest)

        let distDir = path.resolve('dist');
        let componentDir = path.resolve('dist/components');
        if(!fs.existsSync(distDir)){
            fs.mkdirSync(distDir);
        }
        if(!fs.existsSync(componentDir)){
            fs.mkdirSync(componentDir);
        }

        fs.writeFileSync(filePath, code, err => {
            if (err) return reject(err)
            report()
        })
    })
}