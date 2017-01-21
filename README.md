# kevinto.me
[Kevin To](http://kevinto.me)'s personal website, built using static site generator [Hexo](https://hexo.io/), written with SASS and ES6 (with the help of Webpack 2 and Babel).

## Plugins
* [hexo-renderer-sass](https://github.com/knksmith57/hexo-renderer-sass) for Sass CSS preprocessor.
* [hexo-autoprefixer](https://github.com/hexojs/hexo-autoprefixer) for auto vendor prefixing.
* [hexo-critical-css](https://github.com/john-whitley/hexo-critical-css) for inlining of critical CSS.
* [hexo-browsersync](https://github.com/hexojs/hexo-browsersync) for BrowserSync when running `hexo server`.
* [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git) for easy deployment to GitHub pages.

## Usage
* `npm test` to run tests.
* `npm test -- --watch` to run tests and watch for changes.
* `npm run s` to serve site using BrowserSync for development.
* `npm run g` to build the site.
* `npm run g:production` to build the site in production mode.
* `npm run c` to clean the build.
* `npm run d` to deploy to GitHub pages.
