import twitter from 'modules/twitter';
import fivehundredpx from 'modules/fivehundredpx';
import github from 'modules/github';
import trakt from 'modules/trakt';
import templater from 'lodash-es/template.js';
import socialTemplate from './social-template.html';
import socialParserErrorHandler from 'modules/social-parser-error-handler';

/**
 * Retrieves all social activities
 */
export default function socialActivities() {
  const socialPromises = [];

  // Gets Twitter social activities
  socialPromises.push(twitter({
    username: 'qkevinto',
    count: 1,
    extras: {
      id: '300888125675278336'
    }
  })
  .catch((error) => {
    return socialParserErrorHandler(error, 'qkevinto', 'Twitter');
  })
  .then((activity) => {
    const container =
      document.querySelector('[data-social-activities="twitter"]');
    const template = templater(socialTemplate);
    container.innerHTML = template(activity[0]);

    return Promise.resolve();
  }));

  // Gets 500px social activities
  socialPromises.push(fivehundredpx({
    username: 'kevinto',
    count: 1,
    extras: {
      consumerKey: 'TCaLeU8cjcQEAf6oUybAG9bWR8SIfhascBmOBvMV'
    }
  })
  .catch((error) => {
    return socialParserErrorHandler(error, 'kevinto', '500px');
  })
  .then((activity) => {
    const container =
      document.querySelector('[data-social-activities="500px"]');
    const template = templater(socialTemplate);
    container.innerHTML = template(activity[0]);

    return Promise.resolve();
  }));

  // Gets Trakt social activities
  socialPromises.push(trakt({
    username: 'kevin',
    count: 1,
    extras: {
      clientID:
        '0e48d28b25a45e5845b4f49b2a079bdacf0f966ce676b4be84002941bc6cee59'
    }
  })
  .catch((error) => {
    return socialParserErrorHandler(error, 'kevin', 'Trakt');
  })
  .then((activity) => {
    const container =
      document.querySelector('[data-social-activities="trakt"]');
    const template = templater(socialTemplate);
    container.innerHTML = template(activity[0]);

    return Promise.resolve();
  }));

  // Gets GitHub social activities
  socialPromises.push(github({
    username: 'qkevinto',
    count: 1
  })
  .catch((error) => {
    return socialParserErrorHandler(error, 'qkevinto', 'GitHub');
  })
  .then((activity) => {
    const container =
      document.querySelector('[data-social-activities="github"]');
    const template = templater(socialTemplate);
    container.innerHTML = template(activity[0]);

    return Promise.resolve();
  }));

  // When all social activities have been retrieved, remove the loading class to
  // show the social content.
  Promise.all(socialPromises)
  .then(() => {
    const container =
      document.querySelector('[data-social-activities="container"]');
    container.classList.remove('SocialActivities-is-loading');
  });
}
