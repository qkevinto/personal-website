/* eslint-env node */

const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

function webpackConfigCommon() {
  return {
    context: `${__dirname}/public/scripts`,
    entry: {
      'main': 'main.js'
    },
    resolve: {
      modules: [
        `${__dirname}/public/scripts`,
        `${__dirname}/public/scripts/modules`,
        `${__dirname}/node_modules`
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
      path: `${__dirname}/public/scripts`,
      filename: '[name].bundle.js'
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
