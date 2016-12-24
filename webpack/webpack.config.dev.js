var webpack = require('webpack');
var path = require('path');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');

var commonConfig = require('./common-config.js');

var config = {
  entry: commonConfig.entry,
  output: commonConfig.output,
  module: {
      loaders: commonConfig.commonLoaders.concat({
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      })
    },
    postcss: commonConfig.postCSSConfig
};

module.exports = config;