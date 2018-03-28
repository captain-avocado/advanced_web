const webpack = require('webpack');
const path = require('path');

const paths = {
  src: path.join(__dirname, 'src/'),
  dist: path.join(__dirname, 'dist/')
};

module.exports = {
    mode: 'development',
    entry: {
      'index': paths.src + 'scripts/index.js',
      'blog': paths.src + 'scripts/blog.js',
      'works': paths.src + 'scripts/works.js',
      'about': paths.src + 'scripts/about.js'
    },
    output: {
        path: paths.dist,
        filename: '[name].min.js'
    },
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //     name: 'common'
      // }),
      
    //   new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery'  
    //   })
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
          },
        ],
      },
};