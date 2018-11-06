require('babel-polyfill');
const gulp = require('gulp');
const del = require('del');
const rollupConfig = require('./rollup.config');
const { rollup } = require('rollup');
const modules = require('./scripts/libs/findModules');

const bundle = config => rollup(config).then(bundle => bundle.write(config.output));


gulp.task('clear', (cb) => {
    del([
        'dist/**'
    ],cb())
});

gulp.task('build', ['clear'], () => {
    modules.forEach(comp => {
        bundle(rollupConfig(comp))
    })
});