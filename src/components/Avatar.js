import React from 'react';
import style from './Avatar.module.scss';

import { avatarUrl, name } from '../utils/content';
import Profile from './Profile';

export default class Avatar extends React.Component {
  render() {
    return (
      <figure className={style.root}>
        <img className={style.image} src={avatarUrl} width="160" height="160" alt={'Photo of ' + name} />
      </figure>
    );
  }
}
