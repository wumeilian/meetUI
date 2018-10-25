import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'core/test/main.js',
    output: {
        file: 'build/bundle.iife.js',
        name: 'myBundle',
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