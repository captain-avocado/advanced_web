const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/scripts/main.js'),
    output: {
        path: path.join(__dirname, 'dest/scripts'),
        filename: '[name].bundle.js'
    },
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //     name: 'common'
      // }),
      
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'  
    })
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            options: {
                fix: true
            }
          }
        ],
      },
};