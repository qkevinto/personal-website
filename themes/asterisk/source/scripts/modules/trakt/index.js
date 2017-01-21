import 'whatwg-fetch';
import socialParser from 'modules/social-parser';

/**
 * Trakt social activities parser
 * @param  {Object} [options={}]            Options object for configuration.
 * @param  {String} options.username        Username for the 500px account to
 *                                          retrieve activities from.
 * @param  {Number} options.count           The number of activities to
 *                                          return.
 * @param  {Object} [options.extras={}]     Any extra data.
 * @param  {String} options.extras.clientID Client ID to access the Trakt API.
 * @return {Promise}                        A promise that is resolved with
 *                                          the social activities object.
 */
export default function trakt(options) {
  const appURL = 'https://trakt.tv';
  const network = 'Trakt';
  const username = options.username;
  const clientID = options.extras.clientID;

  return fetch(`https://api-v2launch.trakt.tv/users/${username}/history`, {
    headers: {
      'trakt-api-version': 2,
      'trakt-api-key': clientID
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    return socialParser(response, {
      username: () => { return username; },
      network: () => { return network; },
      content: response => {
        if (response.show) {
          return `Watched ${response.show.title}: ` +
            `${response.episode.title} (${response.episode.season}x` +
            `${response.episode.number})`;
        } else if (response.movie) {
          return `Watched ${response.movie.title} ` +
            `(${response.movie.year})`;
        } else {
          throw new TypeError('Activity is not a TV Show or Movie.');
        }
      },
      link: response => {
        if (response.show) {
          return `${appURL}/shows/${response.show.ids.slug}/seasons/` +
            `${response.episode.season}/episodes/${response.episode.number}`;
        } else if (response.movie) {
          return `${appURL}/movies/${response.movie.ids.slug}`;
        }
      }
    });
  });
}
