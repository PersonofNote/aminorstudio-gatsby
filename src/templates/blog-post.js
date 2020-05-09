//TODO: Consider using other methods besides dangerouslySetInnerHTML

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"


export default ({ data }) => {
  const post = data.markdownRemark
  //TODO add search by tag functionality and styles to indicate tag links
  const tagList = post.frontmatter.tags.map(tag => 
                    <span style={{
                     padding: `0 0.2rem`,
                    }}
                      key={post.frontmatter.tags.indexOf(tag)}> {tag} </span>
                   )
  return (
    <Layout>
     {/* <Img className="featured-post-image" fluid={post.frontmatter.coverImage.childImageSharp.fluid} /> */}
      <div style={{
        maxWidth: 750,
        margin: 'auto'
      }}>
        <h1>{ post.frontmatter.title }</h1>
    <span style={{
      color: `gray`,
    }}>{post.timeToRead}-minute read</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `flex-start`
      }}> Tagged: {tagList}</div>
      </div>
  
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        tags
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
      internal {
        content
      }
    }
  }`