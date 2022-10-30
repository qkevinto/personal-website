import React from 'react'
import striptags from 'striptags'

import { root, content, header, username, network, loader, meta } from './SocialActivity.module.scss'
import Loader from './Loader'

const SocialActivity = (props) => {
  return (
    <div>
      {props.loading && !props.error ?
        (
          <div className={`${root}`}>
            <div className={header}>
              <span className={username}>{props.username}</span>
              <span className={network}>{props.network}</span>
            </div>
            <div className={loader}>
              <Loader></Loader>
            </div>
          </div>
        ):
        (
          <a
            href={props.link}
            className={`${root}`}
            aria-label={props.username + ' on ' + props.network + ': ' + props.content}
          >
            <div className={header}>
              <span className={username}>{props.username}</span>
              <span className={network}>{props.network}</span>
            </div>
            <div className={content}>
              {(props.error) ? (
                'Uh oh, looks something broke! 💩'
              ) : striptags(props.content)}
            </div>
            {(typeof props.metaPrimary !== 'undefined' || typeof props.metaSecondary !== 'undefined') ? (
              <div className={meta}>
                {typeof props.metaPrimary !== 'undefined' && props.metaPrimary ? (
                  <div>{props.metaPrimary}</div>
                ) : undefined}
                {typeof props.metaSecondary !== 'undefined' ? (
                  <div>{props.metaSecondary}</div>
                ) : undefined}
              </div>
            ): undefined}
          </a>
        )
      }
    </div>
  )
}

export default SocialActivity
