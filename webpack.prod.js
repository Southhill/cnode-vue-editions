const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new UglifyJSWebpackPlugin(),
        new webpack.DefinePlugin({
            process.env: {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
})