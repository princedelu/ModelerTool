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
      loaders: commonConfig.commonLoaders.concat(
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1!postcss-loader')
        }
      )
    },
  plugins: [
        // extract inline css from modules into separate files
        new ExtractTextPlugin('../styles/main.css', { allChunks: true }),
        new webpack.optimize.DedupePlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.UglifyJsPlugin({
		  sourceMap: false,
		  compress: {
			sequences: true,
			dead_code: true,
			conditionals: true,
			booleans: true,
			unused: true,
			if_return: true,
			join_vars: true,
			drop_console: true
		  },
		  mangle: {
			except: ['$super', '$', 'exports', 'require']
		  },
		  output: {
			comments: false
		  } 
		})
    ]
  ,
    postcss: commonConfig.postCSSConfig
};

module.exports = config;