import React from 'react';

import { root, profile } from './About.module.scss';
import * as content from '../utils/content';
import Profile from './Profile';

export default class About extends React.Component {
  render() {
    return (
      <section className={root}>
        <div className={profile}>
          <Profile></Profile>
        </div>
        <div dangerouslySetInnerHTML={{__html: content.about}}>
        </div>
      </section>
    );
  }
}
