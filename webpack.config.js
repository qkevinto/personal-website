/* eslint-env node */

const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const path = require('path');

function webpackConfigCommon() {
  return {
    context: path.resolve(__dirname,'public/scripts'),
    entry: [ path.resolve(__dirname, 'themes/asterisk/source/scripts/main.js') ],
    resolve: {
      modules: [
        path.resolve(__dirname, 'public/scripts'),
        path.resolve(__dirname, 'public/scripts/modules'),
        path.resolve(__dirname, 'node_modules')
      ],
      extensions: ['.js']
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'eslint-loader'
        },
        {
          test: /\.html$/,
          use: 'raw-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, 'public/scripts'),
      filename: '[name].js'
    }
  };
}

module.exports = function() {
  if (process.env.NODE_ENV === 'production') {
    return webpackMerge(webpackConfigCommon(), {
      plugins: [
        new UglifyJsPlugin({
          compress: { warnings: false }
        })
      ]
    });
  } else {
    return webpackMerge(webpackConfigCommon(), {});
  }
};
