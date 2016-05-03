import 'whatwg-fetch';

/**
 * GitHub social activities parser
 * @param  {Object} [options={}]     Options object for configuration.
 * @param  {String} options.username Username for the GitHub account to retrieve
 *                                   activities from.
 * @param  {Number} options.count    The number of activities to return.
 * @return {Promise}                 A promise that is resolved with the social
 *                                   activities object.
 */
export default function github(options) {
  const appURL = 'https://github.com/';
  const network = 'GitHub';
  const username = options.username;
  const count = options.count;

  return fetch(`https://api.github.com/users/${username}/events`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const activities = [];
      /**
       * Since the API call does not have a query to reduce the amount of
       * activites returned, we have to slice the response to reduce it.
       */
      const slicedResponse = response.slice(0, count);
      /**
       * Maps a bunch of eventTypes that GitHub returns into some readable
       * and more coherent strings.
       */
      const eventType = {
        'CommitCommentEvent': 'Commented on a commit in',
        'CreateEvent': 'Created',
        'DeleteEvent': 'Deleted',
        'ForkEvent': 'Forked',
        'GollumEvent': 'Changed Wiki for',
        'IssueCommentEvent': 'Changed issue comment in',
        'IssuesEvent': 'Changed an issue in',
        'MemberEvent': 'Changed members in',
        'PublicEvent': 'Made public: ',
        'PullRequestEvent': 'Made a pull request to',
        'PullRequestReviewCommentEvent': 'Commented on a pull request in',
        'PushEvent': 'Pushed changes to',
        'ReleaseEvent': 'Created a new release for',
        'WatchEvent': 'Starred'
      };

      slicedResponse.forEach((event) => {
        let activity = {
          username: username,
          network: network,
          content: `${eventType[event.type]} ${event.repo.name}`,
          background: '',
          link: `${appURL}${event.repo.name}`,
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
