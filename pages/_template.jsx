import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import '../css/main.scss';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: config.siteDescription },
            { name: 'keywords', content: config.siteKeyword },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'author', content: config.siteAuthor },
            { name: 'apple-mobile-web-app-title', content: config.siteTitle },
            { name: 'application-name', content: config.siteTitle },
            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'msapplication-TileImage', content: '/mstile-144x144.png' },
            { name: 'theme-color', content: '#ffffff' },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${config.twitterHandle}` },
            { name: 'twitter:title', content: config.siteTitle },
            { name: 'twitter:description', content: config.siteDescription },
            { name: 'twitter:image', content: `${config.siteUrl}${config.siteImage}` },
            { property: 'og:title', content: config.siteTitle },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: config.siteUrl },
            { property: 'og:image', content: `${config.siteUrl}${config.siteImage}` },
          ]}
          link={[
            { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
            { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-touch-icon-60x60.png' },
            { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-touch-icon-72x72.png' },
            { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon-76x76.png' },
            { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-touch-icon-114x114.png' },
            { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
            { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-touch-icon-144x144.png' },
            { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
            { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
            { rel: 'icon', type: 'image/png', href: '/android-chrome-192x192.png', sizes: '192x192' },
            { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
            { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
            { rel: 'manifest', href: '/manifest.json' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg' },
            { rel: 'canonical', href: config.siteUrl }
          ]}
        />
        {this.props.children}
      </div>
    )
  }
}
