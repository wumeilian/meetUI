const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const components = process.argv.slice(2);

const entrys = {};
const plugins = [];

components.forEach(item => {
    entrys[item] = resolve(`examples/${item}/index.js`);
    plugins.push(
        new HtmlWebpackPlugin({
            template: resolve(`examples/${item}/index.html`),
            filename: resolve(`build/${item}/index.html`)
        })
    )
});


const options = {
    entry: entrys,
    output: {
        filename: '[name]/[name].bundle.js',
        path: resolve('build'),
        publicPath: "/"
    },
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins,
    devServer: {
        contentBase: resolve('build'),
        compress: true,
        port: 9000
    },
    resolve: {
        alias: {
            '@ele': resolve('core/src/elements')
        }
    }
};

function resolve(p) {
    return path.resolve(process.cwd(),p)
}


module.exports = options;

