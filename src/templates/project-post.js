//TODO: Consider using other methods besides dangerouslySetInnerHTML

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <div style={{
        minHeight: `65vh`
      }}>
        <h1>{ post.frontmatter.title }</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  )
}
export const query = graphql`
query($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    frontmatter {
      title
      tags
    } 
  }
}`