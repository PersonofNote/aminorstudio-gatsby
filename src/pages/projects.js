import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import FilterContent from "../components/Filtercontent";
import ProjectContent from "../components/ProjectContent"

const ProjectsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Projects = edges
    .filter(edge => !!edge.node.frontmatter.visible) 
    .map(edge =>  <article  style={{position: `relative`}} key={edge.node.title} className="project-card">
      <Img className="project-image" fluid={edge.node.frontmatter.coverImage.childImageSharp.fluid} />
      <ProjectContent key={edge.node.id} content={edge.node}></ProjectContent>
      </article>)
  return (
    <Layout>
    <SEO title="Projects" />
    <FilterContent />
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}></div>
    <div className="projects-container">{Projects}</div>
    </Layout>
  )
}

export default ProjectsPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(projects)/"  }}, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            visible
            description
            tags
            icons {
              icon
              link
              tooltip
            }
            coverImage {
              childImageSharp {
                fluid {
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