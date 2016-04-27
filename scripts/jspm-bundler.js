const exec = require('child_process').exec;
const fs = require('hexo-fs');
const nodefs = require('fs');

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

          // Deletes public/package.json as it is not needed for production
          nodefs.unlink('public/package.json', () => {
            return Promise.resolve();
          });

          console.log('jspm-bundler.js Finished bundling jspm packages to public/package.json');
        });
      });
  });
});
