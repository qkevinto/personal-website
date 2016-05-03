/**
 * JSPM's Production Workflow: http://jspm.io/docs/production-workflows.html
 *
 * This script makes the neccessary modifications to package.json to allow jspm
 * bundle to run in the public folder directory, then executes jspm bundle with
 * injection and minifiction options, and does some clean up.
 */

const exec = require('child-process-promise').exec;
const fs = require('hexo-fs');
const nodefs = require('fs');

// Use filter instead of event as a filter will wait for a promise to be
// resolved before proceeding.
hexo.extend.filter.register('after_generate', () => {
  // Reads package.json
  const packageJson = fs.readFile('package.json');

  packageJson.then(function(content) {
    // Parse package.json as JSON
    const json = JSON.parse(content);
    // Caches baseURL value
    const baseURL = json.jspm.directories.baseURL;
    // Caches configFile value
    const configFile = json.jspm.configFile;
    const regex = new RegExp(`${baseURL}\/`, 'g');

    json.jspm.directories.baseURL = './';
    // Strips our baseURL from configFile value
    json.jspm.configFile = configFile.replace(regex, '');

    // Writes the modified package.json to the public folder
    return fs.writeFile('public/package.json', JSON.stringify(json, null, 2))
      .then(() => {
        // Runs jspm bundle
        return exec('jspm bundle scripts/main scripts/main-bundle.js --inject --minify', {
          cwd: './public/'
        })
          .then((result) => {
            console.log(result.stdout);
            console.log('jspm-bundler.js: Bundled jspm packages to public/scripts/main-bundle.js');

            // Deletes public/jspm_packages as it is no longer needed for production
            return fs.rmdir('public/jspm_packages')
              .then(() => {
                console.log('jspm-bundler.js: Removed public/jspm_packages');
                return Promise.resolve();
              });
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .then(() => {
        // Deletes public/package.json as it is not needed for production
        return nodefs.unlink('public/package.json', () => {
          console.log('jspm-bundler.js: Removed public/package.json');
        });
      });
  });
});
