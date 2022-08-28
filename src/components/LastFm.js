import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import SocialActivity from './SocialActivity';

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
    fetch('https://hsxvw47yof.execute-api.us-east-1.amazonaws.com/last-fm')
      .then(response => response.json())
      .then(response => {
        const latestTrack = response.recenttracks.track[0];

        this.setState({
          loading: false,
          content: `${latestTrack.name} - ${latestTrack.artist['#text']}`,
          link: latestTrack.url,
          metaPrimary: `${latestTrack['@attr'] && latestTrack['@attr'].nowplaying ? 'Now playing' : formatDistanceToNow(new Date(latestTrack.date.uts * 1000), {addSuffix: true})}`,
        });
      })
      .catch(error => {
        throw new Error(error);

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
