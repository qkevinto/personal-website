import 'whatwg-fetch';
import socialParserErrorHandler from 'modules/social-parser-error-handler';
import striptags from 'striptags';

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
  const count = options.count;

  return fetch(`http://cpv2api.com/pens/public/${username}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const activities = [];
      /**
       * Since the API call does not have a query to reduce the amount of
       * activites returned, we have to slice the response to reduce it.
       */
      const slicedResponse = response.data.slice(0, count);

      slicedResponse.forEach((pen) => {
        let activity = {
          username: username,
          network: network,
          content: striptags(pen.details),
          background: pen.images.large,
          link: pen.link,
          modifier: 'Social--hasImage'
        };

        activities.push(activity);
      });

      return Promise.resolve(activities);
    })
    .catch((error) => {
      return socialParserErrorHandler(error, username, network);
    });
}
