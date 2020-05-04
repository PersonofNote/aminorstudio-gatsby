//TODO allow sorting by tag

import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/PostLink"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Layout from "../components/layout"

const PostsPage = props => {
  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })
  // Extract to reusable component
  const handleInputChange = event => {
    const query = event.target.value
    const { data } = props

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { title, tags } = post.node.frontmatter
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })
    setState({
      query,
      filteredData,
    })
  }


  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  const Posts = posts
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
    <input
              type="text"
              aria-label="Search"
              placeholder="Type to filter posts..."
              onChange={handleInputChange}
          />
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