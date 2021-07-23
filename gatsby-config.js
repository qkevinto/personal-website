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
        icons: [
          {
            'src':'/android-chrome-36x36.png',
            'sizes':'36x36',
            'type':'image/png'
          },
          {
            'src':'/android-chrome-48x48.png',
            'sizes':'48x48',
            'type':'image/png'
          },
          {
            'src':'/android-chrome-72x72.png',
            'sizes':'72x72',
            'type':'image/png'
          },
          {
            'src':'/android-chrome-96x96.png',
            'sizes':'96x96',
            'type':'image/png'
          },
          {
            'src':'/android-chrome-144x144.png',
            'sizes':'144x144',
            'type':'image/png'
          },
          {
            'src':'/android-chrome-192x192.png',
            'sizes':'192x192',
            'type':'image/png'
          },
          {
            'src': '/android-chrome-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': '/android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
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
