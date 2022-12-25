import React, { useState, useEffect } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import SocialActivity from './SocialActivity'

const LastFm = () => {
  const username = 'qkevinto'
  const network = 'last.fm'
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [content, setContent] = useState(null)
  const [link, setLink] = useState(null)
  const [metaPrimary, setMetaPrimary] = useState(null)

  useEffect(() => {
    fetch('https://hsxvw47yof.execute-api.us-east-1.amazonaws.com/last-fm')
      .then(response => response.json())
      .then(response => {
        const latestTrack = response.recenttracks.track[0]

        setLoading(false)
        setContent(`${latestTrack.name} - ${latestTrack.artist['#text']}`)
        setLink(latestTrack.url)
        setMetaPrimary(`${latestTrack['@attr'] && latestTrack['@attr'].nowplaying ? 'Now playing' : formatDistanceToNow(new Date(latestTrack.date.uts * 1000), {addSuffix: true})}`)
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

export default LastFm
