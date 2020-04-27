import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string
  }

  render() {
    const head = Helmet.rewind()

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {head.title.toComponent()}
          {head.meta.toComponent()}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
