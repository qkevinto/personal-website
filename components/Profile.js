import React from 'react';
import style from './Profile.module.scss';

import Avatar from './Avatar';
import { name, role, work } from '../utils/content';

export default class Profile extends React.Component {
  render() {
    return (
      <header>
        <div className={style.avatar}>
          <Avatar></Avatar>
        </div>
        <div>
          <h1 className={style.name}>{name}</h1>
          <h2 className={style.role}>{role}</h2>
          <span className={style.work}>at {work}</span>
        </div>
      </header>
    )
  }
}
