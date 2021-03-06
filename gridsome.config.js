// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'macOS California',
  siteDescription: 'A tour of the Golden State through the years of macOS',
  siteUrl: process.env.DEPLOY_URL || 'https://macoscalifornia.netlify.app',
  metadata: {
    authorTwitter: '@scottsmith',
    authorName: 'Scott Smith',
    shareImage: '/share-image.png',
  },
  titleTemplate: '%s',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/**/*.md',
        typeName: 'MacRelease',
        route: '/:slug'
      }
    },
    {
      use: 'gridsome-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDNAME,
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET,
        resourceOptions: {
          type: "upload",
          prefix: 'macos-california'
        }
      }
    }
  ]
}
