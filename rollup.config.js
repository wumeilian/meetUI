const json = require('rollup-plugin-json');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');

function buildModule(moduleName){
    return {
        input: `core/src/elements/${moduleName}/index.js`,
        output: {
            file: `dist/${moduleName}.js`,
            name: `${moduleName}`,
            format: 'cjs'
        },
        plugins: [
            postcss({
                extensions: [ '.css' ]
            }),
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
    }
}

module.exports = buildModule;