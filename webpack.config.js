const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = ({ mode = 'development' }) => ({
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new ESLintPlugin({
    emitWarning: true,
  })],
  mode,
  devtool: 'source-map',
});
