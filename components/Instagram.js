import React from 'react';
import style from './SocialActivities.module.scss';

import { name } from '../utils/content';
import SocialActivity from './SocialActivity';
import truncateString from '../utils/truncate-string';

export default class SocialActivities extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: false,
      username: 'qkevinto',
      network: 'Instagram',
      content: '',
      background: '',
      link: '',
      date: '',
      extras: ''
    }
  }

  componentDidMount() {
    fetch('https://pacific-caverns-68032.herokuapp.com/')
      .then(response => response.json())
      .then(response => {
        const latestPost = response.items[0];

        this.setState({
          loading: false,
          content: truncateString(latestPost.caption.text, 250),
          background: latestPost.images.standard_resolution.url,
          link: latestPost.link,
          date: new Date(latestPost.caption.created_time * 1000).toString(),
          extras: `${latestPost.likes.count} Like${latestPost.likes.count > 1 ? 's' : '' }`
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
        background={this.state.background}
        link={this.state.link}
        date={this.state.date}
        extras={this.state.extras}></SocialActivity>
    )
  }
}
