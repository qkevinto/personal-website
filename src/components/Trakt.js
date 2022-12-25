import React, { useEffect, useState } from 'react'

import SocialActivity from './SocialActivity'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Trakt = () => {
  const appURL = 'https://trakt.tv'
  const username = 'kevin'
  const network = 'Trakt'
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [content, setContent] = useState(null)
  const [link, setLink] = useState(null)
  const [metaPrimary, setMetaPrimary] = useState(null)

  useEffect(() => {
    fetch('https://hsxvw47yof.execute-api.us-east-1.amazonaws.com/trakt')
      .then(response => response.json())
      .then(response => {
        const latestActivity = response[0]

        setLoading(false)
        setContent((() => {
          if (latestActivity.show) {
            return `Watched ${latestActivity.show.title}: ` +
              `${latestActivity.episode.title} (${latestActivity.episode.season}x` +
              `${latestActivity.episode.number})`
          } else if (latestActivity.movie) {
            return `Watched ${latestActivity.movie.title} ` +
              `(${latestActivity.movie.year})`
          } else {
            throw new TypeError('Activity is not a TV Show or Movie.')
          }
        })())
        setLink((() => {
          if (latestActivity.show) {
            return `${appURL}/shows/${latestActivity.show.ids.slug}/seasons/` +
              `${latestActivity.episode.season}/episodes/${latestActivity.episode.number}`
          } else if (latestActivity.movie) {
            return `${appURL}/movies/${latestActivity.movie.ids.slug}`
          }
        })())
        setMetaPrimary(formatDistanceToNow(new Date(latestActivity.watched_at), {addSuffix: true}))
      })
      .catch(() => {
        setError(true)
      })
  })

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

export default Trakt
