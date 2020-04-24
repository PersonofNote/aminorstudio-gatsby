//TODO: Consider using other methods besides dangerouslySetInnerHTML

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const projectPost = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{ projectPost.frontmatter.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: projectPost.html }} />
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
  }
}`