const path = require('path');

module.exports = ({mode = 'development'}) => ({
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'eslint-loader',
                options: {
                    configFile: (mode === 'production')
                        ? path.resolve('./.eslintrc.json')
                        : path.resolve('./.eslintrc.dev.json'),
                    emitWarning: true,
                }
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }],
    },
    mode,
    devtool: 'source-map',
});
