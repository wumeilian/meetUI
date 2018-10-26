require('babel-polyfill');
const gulp = require('gulp');
const rollupConfigs = require('./rollup.config');
const { rollup } = require('rollup');

const bundle = config => rollup(config).then(bundle => bundle.write(config.output));

gulp.task('build', () => bundle(rollupConfigs));
