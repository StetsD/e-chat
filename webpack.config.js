const webpack = require('webpack');
const config = require('./config');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HWP = new HtmlWebpackPlugin({
    template: `${config.paths.public}/index.html`,
    filename: 'index.html'
});

module.exports = {
    entry: `${config.paths.frontend}/index.js`,
    output: {
        path: config.paths.public,
        filename: 'app.bundle.js'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        HWP
    ]
};
