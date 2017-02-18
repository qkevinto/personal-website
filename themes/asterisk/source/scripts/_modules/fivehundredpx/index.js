import 'whatwg-fetch';
import socialParser from 'social-parser';

/**
 * 500px social activities parser
 * @param  {Object} [options={}]               Options object for configuration.
 * @param  {String} options.username           Username for the 500px account to
 *                                             retrieve activities from.
 * @param  {Number} options.count              The number of activities to
 *                                             return.
 * @param  {Object} [options.extras={}]        Any extra data.
 * @param  {String} options.extras.consumerKey Consumer key to access the 500px
 *                                             API.
 * @return {Promise}                           A promise that is resolved with
 *                                             the social activities object.
 */
export default function fiveHundredPx(options) {
  const appURL = 'https://500px.com';
  const network = '500px';
  const username = options.username;
  const count = options.count;
  const consumerKey = options.extras.consumerKey;

  return fetch('https://api.500px.com/v1/photos?feature=user&username=' +
      `${username}&image_size=4&consumer_key=${consumerKey}&rpp=${count}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return socialParser(response.photos, {
        username: () => { return username; },
        network: () => { return network; },
        content: response => { return response.description; },
        background: response => { return response.image_url; },
        link: response => { return `${appURL}${response.url}`; },
        modifier: () => { return 'Social--hasImage'; }
      });
    });
}
