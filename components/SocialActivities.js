import React from 'react';
import style from './SocialActivities.module.scss';

import { name } from '../utils/content';
import Instagram from './Instagram';
import Github from './Github';
import Trakt from './Trakt';
import Twitter from './Twitter';

export default class SocialActivities extends React.Component {
  render() {
    return (
      <aside className={style.root} aria-label={name + ' \'s social activities'}>
        <header className={style.header}>
          <h2 className={style.heading}>Recent social activities</h2>
        </header>
        <ul className={style.list} aria-label="Recent social activities">
          <li className={style['list-item']}>
            <Instagram></Instagram>
          </li>
          <li className={style['list-item']}>
            <Github></Github>
          </li>
          <li className={style['list-item']}>
            <Trakt></Trakt>
          </li>
          <li className={style['list-item']}>
            <Twitter></Twitter>
          </li>
        </ul>
      </aside>
    )
  }
}
