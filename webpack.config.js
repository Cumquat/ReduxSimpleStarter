const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
};