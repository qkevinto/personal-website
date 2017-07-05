import React from 'react';
import style from './SocialActivities.module.scss';

import { name } from '../utils/content';
import SocialActivity from './SocialActivity';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export default class Github extends React.Component {
  constructor() {
    super();
    this.state = {
      appURL: 'https://github.com/',
      loading: true,
      error: false,
      username: 'qkevinto',
      network: 'GitHub',
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.username}/events`)
      .then(response => response.json())
      .then(response => {
        const latestEvent = response[0];

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

        this.setState({
          loading: false,
          content: `${eventType[latestEvent.type]} ${latestEvent.repo.name}`,
          link: `${this.props.appURL}${latestEvent.repo.name}`,
          metaPrimary: distanceInWordsToNow(new Date(latestEvent.created_at).toString(), {addSuffix: true})
        });
      })
      .catch((error) => {
        console.error(error);

        this.setState({
          error: true
        });
      });
  }

  render() {
    return (
      <SocialActivity
        loading={this.state.loading}
        error={this.state.error}
        link={this.state.link}
        username={this.state.username}
        network={this.state.network}
        content={this.state.content}
        link={this.state.link}
        metaPrimary={this.state.metaPrimary}></SocialActivity>
    );
  }
}
