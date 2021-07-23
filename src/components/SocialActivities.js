import React from 'react';

import { root, header, heading, list, listItem } from './SocialActivities.module.scss';
import * as content from '../utils/content';
import Github from './Github';
import Trakt from './Trakt';
import LastFm from './LastFm';

export default class SocialActivities extends React.Component {
  render() {
    return (
      <aside className={root} aria-label={content.name + ' \'s social activities'}>
        <header className={header}>
          <h2 className={heading}>Elsewhere on the internets&hellip;</h2>
        </header>
        <ul className={list} aria-label="Elsewhere on the internets&hellip;">
          <li className={listItem}>
            <Github></Github>
          </li>
          <li className={listItem}>
            <LastFm></LastFm>
          </li>
          <li className={listItem}>
            <Trakt></Trakt>
          </li>
        </ul>
      </aside>
    );
  }
}
