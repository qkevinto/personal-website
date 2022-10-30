import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Root from '../components/Root'

import '../css/main.scss'

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          shortName
          url
          author
          keyword
          image
          themeColor
          twitterHandle
        }
      }
    }
  `)

  return (
    <>
      <title>{data.site.siteMetadata.title}</title>

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="apple-mobile-web-app-title" content={data.site.siteMetadata.title} />
      <meta name="application-name" content={data.site.siteMetadata.title} />
      <meta name="msapplication-TileColor" content={data.site.siteMetadata.themeColor} />
      <meta name="msapplication-TileImage" content={'/mstile-144x144.png'} />
      <meta name="theme-color" content={data.site.siteMetadata.themeColor} />
      <meta name="twitter:card" content={'summary'} />
      <meta name="twitter:site" content={`@${data.site.siteMetadata.twitterHandle}`} />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta name="twitter:description" content={data.site.siteMetadata.description} />
      <meta name="twitter:image" content={`${data.site.siteMetadata.url}${data.site.siteMetadata.image}`} />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:type" content='website' />
      <meta property="og:url" content={data.site.siteMetadata.url} />
      <meta property="og:image" content={`${data.site.siteMetadata.url}${data.site.siteMetadata.image}`} />

      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192" />
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" />
      <link rel="canonical" href={data.site.siteMetadata.url} />
    </>
  )
}

const Indexpage = () => {
  return (
    <Layout>
      <Root></Root>
    </Layout>
  )
}

export default Indexpage
