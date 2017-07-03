import React from 'react';
import style from './About.module.scss';

import { about } from '../utils/content';
import Profile from './Profile';

export default class About extends React.Component {
  render() {
    return (
      <section className={style.root}>
        <div className={style.profile}>
          <Profile></Profile>
        </div>
        <div dangerouslySetInnerHTML={{__html: about}}>
        </div>
      </section>
    );
  }
}
