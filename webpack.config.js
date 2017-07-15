let webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.tsx',
    vendor: ['react', 'react-dom'],
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', filename: 'vendor.js',
    }),
  ],
};
