import React from 'react';
import style from './Main.module.scss';

import About from '../components/About';
import SocialActivities from '../components/SocialActivities';

export default class Main extends React.Component {
  render() {
    return (
      <div className={style.root}>
        <About></About>
        <SocialActivities></SocialActivities>
      </div>
    )
  }
}
