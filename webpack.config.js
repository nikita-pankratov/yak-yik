var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        // WHERE TO FIND THE REACT CODE
        app: './src/app.js'
    },
    output: {
        filename: 'public/build/bundle.js',
        // This is for debugging
        sourceMapFilename: 'public/build/bundle.map'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}