import 'whatwg-fetch';
import twitterFetcher from 'twitter-fetcher';
import striptags from 'striptags';

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
        time: tweet.time,
        link: tweet.permalinkURL,
        modifier: `Social--${network.toLowerCase()}`
      };

      activities.push(activity);
    });

    return Promise.resolve(activities);
  });
}
