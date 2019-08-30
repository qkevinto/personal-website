const generateBabelConfig = require('gatsby/dist/utils/babel-config');

// Fixes striptags from breaking UglifyJS due to es6 code
// https://github.com/gatsbyjs/gatsby/issues/3780
exports.modifyWebpackConfig = ({ config, stage }) => {
  // https://www.gatsbyjs.org/docs/add-custom-webpack-config/#modifying-the-babel-loader
  const program = {
    directory: __dirname,
    browserslist: ['> 1%', 'last 2 versions']
  };

  return generateBabelConfig(program, stage).then(babelConfig => {
    config.removeLoader('js').loader('js', {
      test: /\.jsx?$/,
      exclude: modulePath => {
        return (
          /node_modules/.test(modulePath) &&
          // whitelist specific es6 modules
          !/node_modules\/(striptags)/.test(modulePath)
        );
      },
      loader: 'babel',
      query: babelConfig
    });
  });
}
