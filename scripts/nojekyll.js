/* global hexo */
/* eslint-env node */

/**
 * hexo-deployer-git uses hexo-fs copyDir() method which has ignoreHidden set
 * to true by default, hence .nojekyll file doesn't get copied from public/ even
 * if it is created.
 *
 * This script simply creates a .nojekyll in .deploy_git if the folder exists
 */

const fs = require('hexo-fs');

hexo.on('deployBefore', () => {
  fs.writeFile('.deploy_git/.nojekyll', '')
    .then(() => {
      console.log('nojekyll.js: .nojekyll file created in .deploy_git');
    });
});
