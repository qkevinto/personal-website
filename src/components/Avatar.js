import React from 'react'

import { root, image } from './Avatar.module.scss'
import * as content from '../data/content'
import avatarImage from '../images/avatar.jpg'

const Avatar = () => {
  return (
    <figure className={root}>
      <img className={image} src={avatarImage} width="160" height="160" alt={'Photo of ' + content.name} />
    </figure>
  )
}

export default Avatar
