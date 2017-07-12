let webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.ts',
  },
  output: {filename: "app.js"},
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
};
