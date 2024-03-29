import React from 'react'

import { avatar, name, role, work } from './Profile.module.scss'
import Avatar from './Avatar'
import * as content from '../data/content'

const Profile = () => {
  return (
    <header>
      <div className={avatar}>
        <Avatar></Avatar>
      </div>
      <div>
        <h1 className={name}>{content.name}</h1>
        <h2 className={role}>{content.role}</h2>
        <span className={work}>at <span dangerouslySetInnerHTML={{__html: content.work}}></span></span>
      </div>
    </header>
  )
}

export default Profile
