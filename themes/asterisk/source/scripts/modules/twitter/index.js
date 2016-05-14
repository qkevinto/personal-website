import 'whatwg-fetch';
import twitterFetcher from 'twitter-fetcher';
import socialParserErrorHandler from 'modules/social-parser-error-handler';
import socialParser from 'modules/social-parser';

/**
 * Twitter social activities parser
 * @param  {Object} [options={}]        Options object for configuration.
 * @param  {String} options.username    Username for the Twitter account to
 *                                      retrieve activities from.
 * @param  {Number} options.count       The number of activities to return.
 * @param  {Object} [options.extras={}] Any extra data.
 * @param  {String} options.extras.id   ID of the Twitter widget used by the
 *                                      twitterFetch library.
 * @return {Promise}                    A promise that is resolved with the
 *                                      social activities object.
 */
export default function twitter(options) {
  const network = 'Twitter';
  const username = options.username;
  const count = options.count;
  const widgetId = options.extras.id;

  return new Promise((resolve, reject) => {
    twitterFetcher.fetch({
      'id': widgetId,
      'domId': '',
      'maxTweets': count,
      'enableLinks': false,
      'showUser': true,
      'showTime': true,
      'dateFunction': '',
      'showRetweet': false,
      'showInteraction': false,
      'dataOnly': true,
      'customCallback': renderTweets
    });

    function renderTweets(response) {
      resolve(response);
    }
  })
  .then((response) => {
    return socialParser(response, {
      username: () => { return username; },
      network: () => { return network; },
      content: response => { return response.tweet; },
      link: response => { return response.permalinkURL; }
    });
  })
  .catch((error) => {
    return socialParserErrorHandler(error, username, network);
  });
}
