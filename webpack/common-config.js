var path = require('path');
var fs = require('fs');

var BUILD_DIR = path.resolve(__dirname, '../public/js');
var APP_DIR = path.resolve(__dirname, '../src/client/');

var config = {
  app: APP_DIR,
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  commonLoaders: [
    {
      /*
       * TC39 categorises proposals for babel in 4 stages
       * Read more http://babeljs.io/docs/usage/experimental/
       */
      test: /\.js$|\.jsx$/,
      loader: 'babel-loader',
      // Reason why we put this here instead of babelrc
      // https://github.com/gaearon/react-transform-hmr/issues/5#issuecomment-142313637
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: [
          'transform-decorators-legacy',
          'transform-react-remove-prop-types',
          'transform-react-constant-elements',
          'transform-react-inline-elements'
        ]
      },
      exclude: path.join(__dirname, '..', 'node_modules')
    },
    { test: /\.json$/, loader: 'json-loader' },
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url',
      query: {
        name: '[hash].[ext]',
        limit: 10000,
      }
    }
  ],
  postCSSConfig: function() {
    return [
      require('postcss-import')(),
      require('postcss-cssnext')({
        browsers: ['> 1%', 'last 2 versions']
      }),
      require('postcss-reporter')({ clearReportedMessages: true })
    ];
  }
};

module.exports = config;
