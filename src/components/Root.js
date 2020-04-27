import React from 'react';

import style from './Root.module.scss';
import About from '../components/About';
import SocialActivities from '../components/SocialActivities';

export default class Root extends React.Component {
  render() {
    return (
      <div className={style.root}>
        <About></About>
        <SocialActivities></SocialActivities>
      </div>
    );
  }
}
