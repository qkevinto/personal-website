import React from 'react';
import style from './SocialActivities.module.scss';

import { name } from '../utils/content';
import SocialActivity from './SocialActivity';
import truncateString from '../utils/truncate-string';

export default class SocialActivities extends React.Component {
  constructor() {
    super();
    this.state = {
      appURL: 'https://trakt.tv',
      clientID: '0e48d28b25a45e5845b4f49b2a079bdacf0f966ce676b4be84002941bc6cee59',
      loading: true,
      error: false,
      username: 'kevin',
      network: 'Trakt',
      content: '',
      background: '',
      link: '',
      date: '',
    }
  }

  componentDidMount() {
    fetch(`https://api-v2launch.trakt.tv/users/${this.state.username}/history`, {
      headers: {
        'trakt-api-version': 2,
        'trakt-api-key': this.state.clientID
      }
    })
      .then(response => response.json())
      .then(response => {
        const latestActivity = response[0];

        this.setState({
          loading: false,
          content: (() => {
            if (latestActivity.show) {
              return `Watched ${latestActivity.show.title}: ` +
                `${latestActivity.episode.title} (${latestActivity.episode.season}x` +
                `${latestActivity.episode.number})`;
            } else if (latestActivity.movie) {
              return `Watched ${latestActivity.movie.title} ` +
                `(${latestActivity.movie.year})`;
            } else {
              throw new TypeError('Activity is not a TV Show or Movie.');
            }
          })(),
          link: (() => {
            if (latestActivity.show) {
              return `${this.state.appURL}/shows/${latestActivity.show.ids.slug}/seasons/` +
                `${latestActivity.episode.season}/episodes/${latestActivity.episode.number}`;
            } else if (latestActivity.movie) {
              return `${this.state.appURL}/movies/${latestActivity.movie.ids.slug}`;
            }
          })(),
          date: new Date(latestActivity.watched_at)
        })
      })
      .catch(error => {
        console.error(error);

        this.setState({
          error: true
        })
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
        date={this.state.date}></SocialActivity>
    )
  }
}
