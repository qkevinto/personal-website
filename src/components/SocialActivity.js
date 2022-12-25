import React from 'react'
import striptags from 'striptags'

import { root, content, header, username, network, loader, meta } from './SocialActivity.module.scss'
import Loader from './Loader'

const SocialActivity = (props) => {
  const headerContent = (
    <div className={header}>
      {!!props.username ?
        <span className={username}>{props.username}</span>
        : undefined}
      <span className={network}>{props.network}</span>
    </div>
  )
  const mainContent = (
    <>
      {headerContent}
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
    </>
  )

  const maybeWrapInAnchor = (
    !!props.link ?
      (<a
        href={props.link}
        className={`${root}`}
        aria-label={props.username + ' on ' + props.network + ': ' + props.content}
      >
        {mainContent}
      </a>) :
      <div className={`${root}`}>
        {mainContent}
      </div>
  )

  return (
    <div>
      {props.loading && !props.error ?
        (
          <div className={`${root}`}>
            {headerContent}
            <div className={loader}>
              <Loader></Loader>
            </div>
          </div>
        ) :
        maybeWrapInAnchor}
    </div>
  )
}

export default SocialActivity
