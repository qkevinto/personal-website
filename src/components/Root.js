import React from 'react'

import { root } from './Root.module.scss'
import About from '../components/About'
import SocialActivities from '../components/SocialActivities'

const Root = () => {
  return (
    <div className={root}>
      <About></About>
      <SocialActivities></SocialActivities>
    </div>
  )
}

export default Root
