import React, { useEffect, useState } from 'react'

import SocialActivity from './SocialActivity'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WaniKani = () => {
  const network = 'WaniKani'
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [content, setContent] = useState(null)
  const [metaPrimary, setMetaPrimary] = useState(null)

  useEffect(() => {
    fetch('https://hsxvw47yof.execute-api.us-east-1.amazonaws.com/wanikani')
      .then(response => response.json())
      .then(response => {
        setLoading(false)
        setContent((() => {
          return `${response.total_count} kanji memorised`
        })())
        setMetaPrimary(formatDistanceToNow(new Date(response.data_updated_at), {addSuffix: true}))
      })
      .catch(() => {
        setError(true)
      })
  }, [])

  return (
    <SocialActivity
      loading={loading}
      error={error}
      link='http://wanikani.com'
      network={network}
      content={content}
      metaPrimary={metaPrimary}>
    </SocialActivity>
  )
}

export default WaniKani
