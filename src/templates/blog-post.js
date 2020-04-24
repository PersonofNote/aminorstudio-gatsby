//TODO: Consider using other methods besides dangerouslySetInnerHTML

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post);
  return (
    <Layout>
      <div>
        
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