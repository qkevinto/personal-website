/* global hexo */
/* eslint-env node */

const exec = require('child-process-promise').exec;

// Use filter instead of event as a filter will wait for a promise to be
// resolved before proceeding.
hexo.extend.filter.register('after_generate', () => {
  return exec('webpack', {
    cwd: `${__dirname}/../`
  })
  .then((result) => {
    console.log(result.stdout);
  });
});
