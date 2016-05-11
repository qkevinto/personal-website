import 'whatwg-fetch';
import socialParserErrorHandler from 'modules/social-parser-error-handler';

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
  const count = options.count;
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
      const activities = [];

      response.forEach((track) => {
        let content;
        let link;

        if (track.show) {
          content = `Watched ${track.show.title}: ${track.episode.title} (${track.episode.season}x${track.episode.number})`;
          link = `${appURL}/shows/${track.show.ids.slug}/seasons/${track.episode.season}/episodes/${track.episode.number}`;
        } else if (track.movie) {
          content = `Watched ${track.movie.title} (${track.movie.year})`;
          link = `${appURL}/movies/${track.movie.ids.slug}`;
        }

        let activity = {
          username: username,
          network: network,
          content: content,
          background: '',
          link: link,
          modifier: ''
        };

        activities.push(activity);
      });

      return Promise.resolve(activities);
    })
    .catch((error) => {
      return socialParserErrorHandler(error, username, network);
    });
}
