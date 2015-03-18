var webpack = require('webpack');

module.exports = {
   entry: {
    app: "./scripts/app.js",
    vendor: ["angular"],
  },
  output: {
    path: './scripts',
    filename: 'bundle.js',
    
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
