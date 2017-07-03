import React from 'react';
import style from './SocialActivities.module.scss';

import { name } from '../utils/content';
import SocialActivity from './SocialActivity';
import truncateString from '../utils/truncate-string';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export default class LastFm extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: false,
      username: 'qkevinto',
      network: 'last.fm'
    };
  }

  componentDidMount() {
    fetch('https://pacific-caverns-68032.herokuapp.com/last-fm')
      .then(response => response.json())
      .then(response => {
        const latestTrack = response.recenttracks.track[0];

        this.setState({
          loading: false,
          content: `${latestTrack.name} - ${latestTrack.artist['#text']}`,
          link: latestTrack.url,
          metaPrimary: `${latestTrack['@attr'] && latestTrack['@attr'].nowplaying ? 'Now playing' : distanceInWordsToNow(new Date(latestTrack.date.uts * 1000).toString(), {addSuffix: true})}`,
        });
      })
      .catch(error => {
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
        background={this.state.background}
        link={this.state.link}
        metaPrimary={this.state.metaPrimary}
        extras={this.state.extras}></SocialActivity>
    );
  }
}
