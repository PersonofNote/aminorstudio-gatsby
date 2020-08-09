/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

const postTemplate = path.resolve(`./src/templates/blog-post.js`);
const projectTemplate = path.resolve(`./src/templates/project-page.js`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              posttype
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  /*
  console.log("LOGGING:")
  const reqJSON = JSON.parse(JSON.stringify(result.data.allMarkdownRemark.edges))
  //console.log(typeof(reqJSON))
  //console.log(result.data.allMarkdownRemark)
  reqJSON.forEach((edge)=> {
    console.log(edge.node.frontmatter);
    console.log(edge.node.fields);
  })
  */


  result.data.allMdx.edges.forEach((edge) => {
    if (edge.node.frontmatter.posttype === 'project') {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/project-post.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: edge.node.fields.slug,
        },
      })
    }else{
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: edge.node.fields.slug,
      },
    })
  }
  })
}