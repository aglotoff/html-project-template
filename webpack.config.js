const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = ({ mode = 'development' } = {}) => ({
  output: {
    filename: '[name].js',
    library: {
      name: 'myProject',
      type: 'window',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      emitWarning: true,
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/js/utils/'),
    },
  },
  mode,
  devtool: 'source-map',
});
