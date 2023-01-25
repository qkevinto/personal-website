module.exports = {
  siteMetadata: {
    title: 'Kevin To - UI Engineer',
    shortName: 'Kevin To',
    url: 'https://kevinto.me',
    description: 'Kevin To is an experienced UI Engineer from Sydney, Australia.',
    author: 'Kevin To',
    keyword: 'iOS, Swift, SwiftUI, Front-end Engineer, UI Engineer, Front-end Developer, Web Developer, HTML, CSS, JavaScript, Sydney, Australia',
    image: '/images/avatar.jpg',
    themeColor: '#1f1f1f',
    twitterHandle: 'qkevinto'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kevin To - UI Engineer',
        short_name: 'Kevin To',
        start_url: '/',
        background_color: '#1f1f1f',
        theme_color: '#1f1f1f',
        display: 'minimal-ui',
        icon: `src/images/icon.jpg`
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-22787959-1',
      },
    },
    'gatsby-plugin-sass'
  ]
}
