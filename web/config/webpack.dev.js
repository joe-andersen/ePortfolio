const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    devServer: {
        host: '0.0.0.0',
        port: '3000',
        public: '0.0.0.0:3000',
        hot: true,
        inline: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/,
        },
        disableHostCheck: true,
        historyApiFallback: true,
    },
};

module.exports = merge(common, config);
