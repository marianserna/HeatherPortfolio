module.exports = {
  siteMetadata: {
    title: 'Heather Halliday',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-116316556-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Heather Halliday',
        short_name: 'Heather Halliday',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icons: [],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '16h24zcri5xr',
        accessToken:
          '80c172a3d3f27b654fa417212c8b9c2a54f528950a958d948bab832ce805334b',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-netlify`,
  ],
}
