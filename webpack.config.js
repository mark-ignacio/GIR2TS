const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()], // removes node_modules from your final bundle
  entry: './src/generate.ts', // make sure this matches the main root of your code 
  mode: "development",
  output: {
    path: path.join(__dirname, 'dist'), // this can be any path and directory you want
    filename: 'generate.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimize: false, // enabling this reduces file size and readability
  },
};