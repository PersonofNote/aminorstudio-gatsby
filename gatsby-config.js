module.exports = {
  siteMetadata: {
    title: `A Minor Studio`,
    description: `Personal Site and Portfolio for Jessica Martin`,
    author: `A Person of Note`,
    logo: `src/images/logo.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // I don't remember what this is
    `gatsby-transformer-remark`, // Or this. Images maybe?
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [ // Gatsby remark has to be a sub-plugin as well as its own plugin...?
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`, // Why a name?
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `a-minor-studio`,
        short_name: `aminorstudio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
