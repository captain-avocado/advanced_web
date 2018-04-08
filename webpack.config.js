const webpack = require('webpack');
const path = require('path');

const paths = {
    src: path.join(__dirname, 'src/'),
    dist: path.join(__dirname, 'dist/'),
};

module.exports = {
    mode: 'development',
    entry: {
        'index': paths.src + 'scripts/index.js',
        'blog': paths.src + 'scripts/blog.js',
        'works': paths.src + 'scripts/works.js',
        'about': paths.src + 'scripts/about.js',
        'admin': paths.src + 'admin/main.js',
    },
    output: {
        path: paths.dist,
        filename: '[name].min.js',
    },
    // plugins: [
    //   new webpack.optimize.CommonsChunkPlugin({
    //       name: 'common'
    //   }),
    // ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader',
                            {
                                loader: 'sass-resources-loader',
                                options: {
                                    resources: [
                                        './src/styles/config/mixins.scss',
                                        './src/styles/config/variables.scss',
                                        // "./src/styles/layout/fonts.scss"
                                    ],
                                },
                            },
                        ],
                    },
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                },
            },
        ],
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            images: path.resolve(__dirname, 'src/images/'),
        },
        extensions: ['*', '.js', '.vue', '.json'],
    },
    devtool: '#eval-source-map',
};