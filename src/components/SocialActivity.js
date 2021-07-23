import React from 'react';
import striptags from 'striptags';

import { root, content, header, username, network, loader, meta } from './SocialActivity.module.scss';
import Loader from './Loader';

export default class SocialActivity extends React.Component {
  render() {
    return (
      <div>
        {this.props.loading && !this.props.error ?
          (
            <div className={`${root}`}>
              <div className={header}>
                <span className={username}>{this.props.username}</span>
                <span className={network}>{this.props.network}</span>
              </div>
              <div className={loader}>
                <Loader></Loader>
              </div>
            </div>
          ):
          (
            <a
              href={this.props.link}
              className={`${root}`}
              aria-label={this.props.username + ' on ' + this.props.network + ': ' + this.props.content}
            >
              <div className={header}>
                <span className={username}>{this.props.username}</span>
                <span className={network}>{this.props.network}</span>
              </div>
              <div className={content}>
                {(this.props.error) ? (
                  'Uh oh, looks something broke! 💩'
                ) : striptags(this.props.content)}
              </div>
              {(typeof this.props.metaPrimary !== 'undefined' || typeof this.props.metaSecondary !== 'undefined') ? (
                <div className={meta}>
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
