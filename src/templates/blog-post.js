//TODO: Consider using other methods besides dangerouslySetInnerHTML

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post);
  return (
    <Layout>
      <div style={{
        maxWidth: 750,
        margin: 'auto'
      }}>
        <h1>{ post.frontmatter.title }</h1>
    <span>{post.timeToRead}-minute read</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
      timeToRead
      internal {
        content
      }
    }
  }`