const json = require('rollup-plugin-json');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');

function buildModule(moduleName, isMini){
    const config =  {
        input: `core/src/elements/${moduleName}/index.js`,
        output: {
            file: `dist/components/${moduleName}.js`,
            name: `${moduleName}`,
            format: isMini ? 'umd' : 'cjs'
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
            })
        ]
    }

    // if(isMini){
    //     config.plugins.push(execute(`node_modules/.bin/uglifyjs ${config.input} -c -m --comments '/${config.output.name} v/' --output ${config.output}`))
    // }

    return config;
}

const buildCommonRollup = function (isMini) {
    const config = {
        input: `core/src/index.esm.js`,
        output: {
            file: `dist/mui.js`,
            name: `mui`,
            format: isMini ? 'umd' : 'cjs'
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
            })
        ]
    }
    // if(isMini){
    //     config.plugins.push(execute(`node_modules/.bin/uglifyjs ${config.input} -c -m --comments '/${config.output.name} v/' --output ${config.output}`))
    // }

    return config;
}

module.exports = {
    buildModule,
    buildCommonRollup
};