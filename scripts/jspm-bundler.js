/**
 * JSPM's Production Workflow: http://jspm.io/docs/production-workflows.html
 *
 * This script makes the neccessary modifications to package.json to allow jspm
 * bundle to run in the public folder directory, then executes jspm bundle with
 * injection and minifiction options, and does some clean up.
 */

const exec = require('child_process').exec;
const fs = require('hexo-fs');
const nodefs = require('fs');

// Use filter instead of event as hexo seems to fire off the generateAfter event
// prematurely to and causes race conditions.
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
    fs.writeFile('public/package.json', JSON.stringify(json, null, 2))
      .then(() => {
        // Runs jspm bundle
        exec('jspm bundle scripts/main scripts/main-bundle.js --inject --minify', {
          cwd: './public/'
        }, (err, stdout, stderr) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(stdout);

          // Deletes public/jspm_packages as it is no longer needed for production
          fs.rmdir('public/jspm_packages')
            .then(() => {
              console.log('jspm-bundler.js: Removed public/jspm_packages');
            });

          // Deletes public/package.json as it is not needed for production
          nodefs.unlink('public/package.json', () => {
            return Promise.resolve();
          });

          console.log('jspm-bundler.js: Bundled jspm packages to public/package.json');
        });
      });
  });
});
