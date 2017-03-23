const {resolve}         = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin   = require('webpack-dashboard/plugin');

const srcDir = resolve(__dirname, '../src');


module.exports = {
    devtool: 'source-map',
    
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${srcDir}/index.html`
        }),
        new DashboardPlugin()
       
    ],
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpg)$/,
            use: [{
                loader: 'url-loader',
                options: {limit: 10000} // Convert images < 10k to base64 strings
            }]
        }
        ]
    },
};