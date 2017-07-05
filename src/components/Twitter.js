import React from 'react';

import style from './SocialActivities.module.scss';

import { name } from '../utils/content';
import SocialActivity from './SocialActivity';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const twitterFetcher = typeof window !== 'undefined' ? require('twitter-fetcher') : undefined;

export default class Twitter extends React.Component {
  constructor() {
    super();
    this.state = {
      widgetId: '300888125675278336',
      loading: true,
      error: false,
      username: 'qkevinto',
      network: 'Twitter'
    };
  }

  componentDidMount() {
    new Promise((resolve, reject) => {
      const renderTweets = response => resolve(response);

      try {
        twitterFetcher.fetch({
          id: this.state.widgetId,
          maxTweets: 1,
          enableLinks: false,
          showUser: true,
          showTime: true,
          dateFunction: '',
          showRetweet: false,
          showInteraction: false,
          dataOnly: true,
          customCallback: renderTweets
        });
      }
      catch(error) {
        reject(error);
      }
    })
    .then(response => {
      const latestTweet = response[0];

      this.setState({
        loading: false,
        content: latestTweet.tweet,
        link: latestTweet.permalinkURL,
        metaPrimary: distanceInWordsToNow(latestTweet.timestamp, {addSuffix: true})
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
      <div>
        <div id="twitterContainer"></div>
        <SocialActivity
          loading={this.state.loading}
          error={this.state.error}
          link={this.state.link}
          username={this.state.username}
          network={this.state.network}
          content={this.state.content}
          link={this.state.link}
          metaPrimary={this.state.metaPrimary}></SocialActivity>
      </div>
      );
  }
}
