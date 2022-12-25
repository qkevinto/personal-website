import React, { useState, useEffect } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import SocialActivity from './SocialActivity'

const GitHub = () => {
  const appURL = 'https://github.com/'
  const username = 'qkevinto'
  const network = 'GitHub'
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [content, setContent] = useState(null)
  const [link, setLink] = useState(null)
  const [metaPrimary, setMetaPrimary] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/events`)
      .then(response => response.json())
      .then(response => {
        const latestEvent = response[0]

        /**
         * Maps a bunch of eventTypes that GitHub returns into some readable
         * and more coherent strings.
         */
        const eventType = {
          'CommitCommentEvent': 'Commented on a commit in',
          'CreateEvent': 'Created',
          'DeleteEvent': 'Deleted',
          'ForkEvent': 'Forked',
          'GollumEvent': 'Changed Wiki for',
          'IssueCommentEvent': 'Changed issue comment in',
          'IssuesEvent': 'Changed an issue in',
          'MemberEvent': 'Changed members in',
          'PublicEvent': 'Made public: ',
          'PullRequestEvent': 'Made a pull request to',
          'PullRequestReviewCommentEvent': 'Commented on a pull request in',
          'PushEvent': 'Pushed changes to',
          'ReleaseEvent': 'Created a new release for',
          'WatchEvent': 'Starred'
        }

        setLoading(false)
        setContent(`${eventType[latestEvent.type]} ${latestEvent.repo.name}`)
        setLink(`${appURL}${latestEvent.repo.name}`)
        setMetaPrimary(formatDistanceToNow(new Date(latestEvent.created_at), {addSuffix: true}))
      })
      .catch(() => {
        setError(true)
      })
  }, [])

  return (
    <SocialActivity
      loading={loading}
      error={error}
      link={link}
      username={username}
      network={network}
      content={content}
      metaPrimary={metaPrimary}>
    </SocialActivity>
  )
}

export default GitHub
