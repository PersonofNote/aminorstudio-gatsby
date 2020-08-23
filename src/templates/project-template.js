import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"

const shortcodes = { Link }

export default function ProjectTemplate({ data }) {
  if (typeof(data) !== 'undefined'){
  const mdx = data.mdx;
  console.log("Project:")
  console.log(mdx.frontmatter.title);
  return (
    <Layout>
    {/* <Img className="featured-post-image" fluid={post.frontmatter.coverImage.childImageSharp.fluid} /> */}
    <div style={{
    maxWidth: 750,
    margin: 'auto'
    }}>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
    </Layout>
  )
  }else{
    console.log("Error");
    return(
      <Layout>
        <h1> Something went wrong. </h1>
      </Layout>
    )
  }
}
export const projectQuery = graphql`
  query ProjectPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`