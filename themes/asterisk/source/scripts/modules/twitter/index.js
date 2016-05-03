import 'whatwg-fetch';
import twitterFetcher from 'twitter-fetcher';
import striptags from 'striptags';

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
    const activities = [];

    response.forEach((tweet) => {
      let activity = {
        username: username,
        network: network,
        content: striptags(tweet.tweet),
        background: '',
        link: tweet.permalinkURL,
        modifier: ''
      };

      activities.push(activity);
    });

    return Promise.resolve(activities);
  })
  .catch(() => {
    return Promise.resolve([{
      username: username,
      network: network,
      content: 'Uh oh, something went wrong whilst trying to retrieving social activity.',
      background: '',
      link: '#0',
      modifier: ''
    }]);
  });
}
