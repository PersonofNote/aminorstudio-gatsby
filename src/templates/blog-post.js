//TODO: Consider using other methods besides dangerouslySetInnerHTML

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"


export default ({ data }) => {
  console.log(data); // WHY DOES PUTTING IN A CONSOLE.LOG STATEMENT WORK
  const post = data.mdx;
  //TODO add search by tag functionality and styles to indicate tag links
  
  const tagList = post.frontmatter.tags.map(tag => 
                    <span className="post-tag" style={{
                     padding: `0 0.2rem`, margin: `0 0.2rem`, border: `1px solid lightgray`
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
  <MDXRenderer>{post.body}</MDXRenderer>
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
    mdx(fields: {slug: {eq: $slug}}) {
        body
        timeToRead
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
      
    }
  }`