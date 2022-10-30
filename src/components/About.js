import React from 'react'

import { root, profile } from './About.module.scss'
import * as content from '../data/content'
import Profile from './Profile'

const About = () => {
  return (
    <section className={root}>
      <div className={profile}>
        <Profile></Profile>
      </div>
      <div dangerouslySetInnerHTML={{__html: content.about}}>
      </div>
    </section>
  )
}

export default About
