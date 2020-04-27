import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { siteMetadata } from '../utils/siteMetadata';

import '../css/main.scss';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    data: PropTypes.any
  }

  render() {
    return (
      <div>
        <Helmet
          title={siteMetadata.title}
          meta={[
            {name: 'description', content: siteMetadata.description},
            {name: 'keywords', content: siteMetadata.keyword},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'author', content: siteMetadata.author},
            {name: 'apple-mobile-web-app-title', content: siteMetadata.title},
            {name: 'application-name', content: siteMetadata.title},
            {name: 'msapplication-TileColor', content: siteMetadata.themeColor},
            {name: 'msapplication-TileImage', content: '/mstile-144x144.png'},
            {name: 'theme-color', content: siteMetadata.themeColor},
            {name: 'twitter:card', content: 'summary'},
            {name: 'twitter:site', content: `@${siteMetadata.twitterHandle}`},
            {name: 'twitter:title', content: siteMetadata.title},
            {name: 'twitter:description', content: siteMetadata.description},
            {name: 'twitter:image', content: `${siteMetadata.url}${siteMetadata.image}`},
            {property: 'og:title', content: siteMetadata.title},
            {property: 'og:type', content: 'website'},
            {property: 'og:url', content: siteMetadata.url},
            {property: 'og:image', content: `${siteMetadata.url}${siteMetadata.image}`},
          ]}
          link={[
            {rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-touch-icon-57x57.png'},
            {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-touch-icon-60x60.png'},
            {rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-touch-icon-72x72.png'},
            {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon-76x76.png'},
            {rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-touch-icon-114x114.png'},
            {rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png'},
            {rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-touch-icon-144x144.png'},
            {rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png'},
            {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png'},
            {rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32'},
            {rel: 'icon', type: 'image/png', href: '/android-chrome-192x192.png', sizes: '192x192'},
            {rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96'},
            {rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16'},
            {rel: 'mask-icon', href: '/safari-pinned-tab.svg'},
            {rel: 'canonical', href: siteMetadata.url}
          ]}
        />
        {this.props.children}
      </div>
    );
  }
}

