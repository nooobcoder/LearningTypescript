const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

const config = {
  mode: 'production',
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // This should always be an absolute path
    publicPath: '/dist/', // This is required for live reloading.
  },
  watch: true, // Watches for file changes and does not terminate.
  devtool: false,
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};

module.exports = config;
