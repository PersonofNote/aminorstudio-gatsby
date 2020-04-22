//TODO allow sorting by tag

import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/PostLink"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Layout from "../components/layout"

const PostsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.published) // You can filter your posts based on some criteria
    .map(edge =>  <article   
      style={{
      margin: `0 auto`,
      padding: `1.0875rem 1.45rem`,
    }}><Img className="featured-post-image" fluid={edge.node.frontmatter.coverImage.childImageSharp.fluid} /><PostLink key={edge.node.id} post={edge.node}></PostLink></article>)

  return (
    <Layout>
    <SEO title="Projects" />
    <h1>Latest Thoughts</h1>
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}></div>
    <div>{Posts}</div>
    </Layout>
  )
}

export default PostsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(posts)/"  }}, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            published
            coverImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`