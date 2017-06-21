import React from 'react';
import striptags from 'striptags';

import style from './SocialActivity.module.scss';

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Loader from './Loader';

export default class SocialActivity extends React.Component {
  render() {
    const hasBackground = image =>  image ? `url(${image})` : undefined;
    const date = distanceInWordsToNow(this.props.date, { addSuffix: true });

    return (
      <div>
        {this.props.loading && !this.props.error ?
          (
            <div className={`${style.root} ${this.props.background ? style['has-background'] : ''}`}>
              <div className={style.header}>
                <span className={style.username}>{this.props.username}</span>
                <span className={style.network}>{this.props.network}</span>
              </div>
              <div className={style.loader}>
                <Loader></Loader>
              </div>
            </div>
          ):
          (
            <a
              href={this.props.link}
              className={`${style.root} ${this.props.background ? style['has-background'] : ''}`}
              aria-label={this.props.username + ' on ' + this.props.network + ': ' + this.props.content}
              style={
                {
                  backgroundImage: hasBackground(this.props.background)
                }
              }>
              <div className={style.header}>
                <span className={style.username}>{this.props.username}</span>
                <span className={style.network}>{this.props.network}</span>
              </div>
              <div className={style.content}>
                {(this.props.error) ? (
                  'Uh oh, looks something broke! 💩'
                ) : striptags(this.props.content)}
              </div>
              {(typeof this.props.date !== 'undefined' || typeof this.props.extras !== 'undefined') ? (
                <div className={style.footer}>
                  {typeof this.props.date !== 'undefined' && this.props.date ? (
                    <div className={style.date}>{date}</div>
                  ) : undefined}
                  {typeof this.props.extras !== 'undefined' ? (
                    <div className={style.extras}>{this.props.extras}</div>
                  ) : undefined}
                </div>
              ): undefined}
            </a>
          )
        }
      </div>
    )
  }
}
