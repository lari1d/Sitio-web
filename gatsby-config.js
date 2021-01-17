const dotenv = require('dotenv');
const autoprefixer = require('autoprefixer');

dotenv.config({
  path: '.env',
});

module.exports = {
    siteMetadata: {
      title: 'Tonal de Alebrije',
      description: 'Tonal de alebrije es una revista oaxaqueña.',
      author: '@tonaldealebrije',
      siteURL: 'https://tonaldealebrije.com',
    },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: process.env.SNIPCART_ACCESS_KEY,
        js: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
        styles: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
        autopop: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fortnightly',
        short_name: 'Fortnightly',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
        includePaths: ['src/styles', 'node_modules'],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMap: true,
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
},
],
};
