import 'whatwg-fetch';
import socialParser from 'modules/social-parser';

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

      return socialParser(response, {
        username: () => { return username; },
        network: () => { return network; },
        content: response => { return `${eventType[response.type]} ` +
          `${response.repo.name}`; },
        link: response => { return `${appURL}${response.repo.name}`; }
      });
    });
}
