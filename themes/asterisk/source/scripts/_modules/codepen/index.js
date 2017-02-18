import 'whatwg-fetch';
import socialParser from 'social-parser';

/**
 * CodePen social activities parser
 * @param  {Object} [options={}]     Options object for configuration.
 * @param  {String} options.username Username for the CodePen account to
 *                                   retrieve activities from.
 * @param  {Number} options.count    The number of activities to return.
 * @return {Promise}                 A promise that is resolved with the social
 *                                   activities object.
 */
export default function codepen(options) {
  const network = 'CodePen';
  const username = options.username;

  return fetch(`http://cpv2api.com/pens/public/${username}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return socialParser(response.data, {
        username: () => { return username; },
        network: () => { return network; },
        content: response => { return response.details; },
        background: response => { return response.images.large; },
        link: response => { return response.link; },
        modifier: () => { return 'Social--hasImage'; }
      });
    });
}
