# kto
[Kevin To](http://kevinto.me)'s personal website, built using static site generator [Hexo](https://hexo.io/), written with SASS and ES6 (with the help of Babel, SystemJS and JSPM).

## Plugins
* [hexo-renderer-sass](https://github.com/knksmith57/hexo-renderer-sass) for Sass CSS preprocessor.
* [hexo-autoprefixer](https://github.com/hexojs/hexo-autoprefixer) for auto vendor prefixing.
* [hexo-critical-css](https://github.com/john-whitley/hexo-critical-css) for inlining of critical CSS.
* [hexo-browsersync](https://github.com/hexojs/hexo-browsersync) for BrowserSync when running `hexo server`.
* [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git) for easy deployment to GitHub pages.

## Usage
* `hexo server` to serve site using BrowserSync for development.
* `hexo generate` to build the site.
* `hexo clean` to clean the build.

## TODO
* Write a Hexo plugin to bundle JSPM modules as per the recommended [production workflow](https://github.com/jspm/jspm-cli/blob/master/docs/production-workflows.md).
