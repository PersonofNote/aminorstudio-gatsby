require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `A Minor Studio`,
    description: `Personal Site and Full-Stack Portfolio for Jessica Martin`,
    author: `A Person of Note`,
    logo: `src/images/logo.png`,
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "aminorstudio.com",
        protocol: "https",
        hostname: "aminorstudio.com",
        acl: null
      },
    },
    {
      resolve: `gatsby-plugin-posthog-analytics`,
      options: {
        apiKey: "W_ugphxsf7H_eM-SNcrQQFe8wOC2z-5mA-fcxJ0XNmU",
        head: true,
	      isEnabledDevMode: true
      },
    },
    {
      resolve: "svg-react-loader",
      options: {
        rule: {
          include: `${__dirname}/src/images/icons`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          projects: require.resolve("./src/templates/project-template.js"),
          default: require.resolve("./src/templates/post-template.js"),
        },
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
            },
          },
        ],
      },
    },
    /*
    {
      resolve: `gatsby-remark-interactive-gifs`,
      options: {
        root: `${__dirname}`,
        src: `${__dirname}/src/images/post-images/gifs`,
        dest: `${__dirname}/public/static/gifs`,
        play: `${__dirname}/src/images/post-images/gifs/world-test.gif`,
        placeholder: `${__dirname}/src/images/post-images/gifs/world-test.gif`,
        loading: `${__dirname}/src/images/post-images/gifs/world-test.gif`,
        relativePath: `/static/gifs`
      },
    },
    */
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
