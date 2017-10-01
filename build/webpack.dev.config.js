var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './examples/main',
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.join(__dirname, '../examples/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            cruddy: '../../src/index',
            vue: 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../examples/dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});
