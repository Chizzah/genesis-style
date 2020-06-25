require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Genesis Style`,
    description: `Genesis Style is a South African designer label for women, proudly manufactured in Cape Town.`,
    author: `Chadd Poggenpoel <chaddwebdesign@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-head`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-chakra-ui`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        verbose: true,
        paginationSize: 50,
        includeCollections: ['shop', 'content'],
      },
    },
    {
      resolve: `gatsby-plugin-apollo-shopify`,
      options: {
        shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.GATSBY_CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.GATSBY_CLOUDINARY_API_KEY,
        apiSecret: process.env.GATSBY_CLOUDINARY_API_SECRET,
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        devMode: true,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: process.env.GATSBY_CRISP_CHAT_WEBSITE_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-shopify-theme`,
        short_name: `gatsby-shopify`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `resources/genesis-style-16x16.png`,
      },
    },
  ],
}
