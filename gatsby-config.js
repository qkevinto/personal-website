import { config } from 'config';

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteShortName,
        start_url: '/',
        background_color: config.siteThemeColor,
        theme_color: config.siteThemeColor,
        display: 'minimal-ui',
        icons: [
          {
            'src':'/android-chrome-36x36.png',
            'sizes':'36x36',
            'type':'image/png',
            'density':0.75
          },
          {
            'src':'/android-chrome-48x48.png',
            'sizes':'48x48',
            'type':'image/png',
            'density':1
          },
          {
            'src':'/android-chrome-72x72.png',
            'sizes':'72x72',
            'type':'image/png',
            'density':1.5
          },
          {
            'src':'/android-chrome-96x96.png',
            'sizes':'96x96',
            'type':'image/png',
            'density':2
          },
          {
            'src':'/android-chrome-144x144.png',
            'sizes':'144x144',
            'type':'image/png',
            'density':3
          },
          {
            'src':'/android-chrome-192x192.png',
            'sizes':'192x192',
            'type':'image/png',
            'density':4
          }
        ]
      },
    }
  ]
};
