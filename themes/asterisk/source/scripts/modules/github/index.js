import 'whatwg-fetch';

export default function gitHub(options) {
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
       * Since the API call does not have a query to reduce the amount of events
       * returned, we have to slice the response instead instead.
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
          time: event.created_at,
          link: `${appURL}${event.repo.name}`,
          modifier: `Social--${network.toLowerCase()}`
        };

        activities.push(activity);
      });

      return Promise.resolve(activities);
    });
}
