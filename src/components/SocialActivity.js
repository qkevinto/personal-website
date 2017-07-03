import React from 'react';
import striptags from 'striptags';

import style from './SocialActivity.module.scss';

import Loader from './Loader';

export default class SocialActivity extends React.Component {
  render() {
    const hasBackground = image =>  image ? `url(${image})` : undefined;

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
              {(typeof this.props.metaPrimary !== 'undefined' || typeof this.props.metaSecondary !== 'undefined') ? (
                <div className={style.meta}>
                  {typeof this.props.metaPrimary !== 'undefined' && this.props.metaPrimary ? (
                    <div>{this.props.metaPrimary}</div>
                  ) : undefined}
                  {typeof this.props.metaSecondary !== 'undefined' ? (
                    <div>{this.props.metaSecondary}</div>
                  ) : undefined}
                </div>
              ): undefined}
            </a>
          )
        }
      </div>
    );
  }
}
