const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const ip = require('./libs/ip');
const chalk = require('chalk');
const components = process.argv.slice(2);

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const port = 3000

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(port, function () {
    console.log('Example app listening on port port!\n');
});


function tips(comps){
    comps.forEach(item=>{
        console.log(chalk.magenta(`[Tips] visit: http://localhost:${port}/${item}/index.html`));
        console.log(chalk.magenta(`            : http://${ip()}:${port}/${item}/index.html`) + '\n');
    })
}

tips(components);


