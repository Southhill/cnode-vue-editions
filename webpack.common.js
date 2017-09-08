const path = require('path')
const webpack  =require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const autoprefixer = require('autoprefixer')({browsers: ['iOS>=7', 'Android>=4.1']}) 
const resolvePath = function(dir) {
    return path.resolve(__dirname, dir)
}

let config = {
    target: 'web',
    entry: {
        main: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: [resolvePath('src'), resolvePath('test')],
                exclude: [resolvePath('node_modules')]
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: 'url-loader',
                query: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'custom title'
        }),
        new webpack.HandedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        },
        extension: ['js', 'vue', 'json'],
        modules: [
            resolvePath('node_modules'),
            resolvePath('src')
        ]
    }
}

module.exports = config