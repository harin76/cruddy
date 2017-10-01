var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');


var webpackConfig = merge(webpackBaseConfig, {
    devtool: '#inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"testing"'
            }
        })
    ]
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
