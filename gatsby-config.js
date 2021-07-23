module.exports = {
  siteMetadata: {
    title: 'Kevin To - UI Engineer'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Kevin To - UI Engineer',
        short_name: 'Kevin To',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
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
};
