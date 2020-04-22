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
  if (node.internal.type === `MarkdownRemark`) {
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
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ edge }) => {
    if (edge.node.frontmatter.posttype === 'project') {
      createPage({
        path: edge.node.fields.slug,
        component: projectTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    }else{
    createPage({
      path: edge.node.fields.slug,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  }
  })
}

/*
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const BlogPostTemplate = path.resolve(
    'src/templates/BlogPostTemplate.js'
  );

  return graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.nodes;

    // create page for each mdx file
    posts.forEach(post => {
      createPage({
        path: post.fields.slug,
        component: BlogPostTemplate,
        context: {
          slug: post.fields.slug,
        },
      });
    });
  });
};

// Creates slug for each post
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
*/