import React from 'react'

import { root, header, heading, list, listItem } from './SocialActivities.module.scss'
import * as content from '../data/content'
import GitHub from './GitHub'
import LastFm from './LastFm'

const SocialActivities = () => {
  return (
    <aside className={root} aria-label={content.name + ' \'s social activities'}>
      <header className={header}>
        <h2 className={heading}>Elsewhere on the internets&hellip;</h2>
      </header>
      <ul className={list} aria-label="Elsewhere on the internets&hellip;">
        <li className={listItem}>
          <GitHub></GitHub>
        </li>
        <li className={listItem}>
          <LastFm></LastFm>
        </li>
      </ul>
    </aside>
  )
}

export default SocialActivities
