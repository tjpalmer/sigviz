let webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.tsx',
  },
  output: {filename: "app.js"},
  module: {
    loaders: [
      {
        test: /\.ts$|\.tsx$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  devServer: {
    hot: false,
    inline: false,
  },
};
