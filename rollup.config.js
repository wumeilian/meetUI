const json = require('rollup-plugin-json');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

module.exports = {
    input: 'core/test/main.js',
    output: {
        file: 'build/dialog.js',
        name: 'dialog',
        format: 'iife'
    },
    plugins: [
        json(),
        resolve({
            // 将自定义选项传递给解析插件
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ]
};