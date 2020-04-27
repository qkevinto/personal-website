import React from 'react';
import style from './SocialActivities.module.scss';

import { name } from '../utils/content';
import Github from './Github';
import Trakt from './Trakt';
import LastFm from './LastFm';

export default class SocialActivities extends React.Component {
  render() {
    return (
      <aside className={style.root} aria-label={name + ' \'s social activities'}>
        <header className={style.header}>
          <h2 className={style.heading}>Elsewhere on the internets&hellip;</h2>
        </header>
        <ul className={style.list} aria-label="Elsewhere on the internets&hellip;">
          <li className={style['list-item']}>
            <Github></Github>
          </li>
          <li className={style['list-item']}>
            <LastFm></LastFm>
          </li>
          <li className={style['list-item']}>
            <Trakt></Trakt>
          </li>
        </ul>
      </aside>
    );
  }
}
