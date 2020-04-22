import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import FilterContent from "../components/Filtercontent";
import ProjectContent from "../components/ProjectContent"

import SpacepostImage from "../images/project-splash/spacepost.png"
import iPhoneImage from "../images/project-splash/iphone-screenshot.png"

import SVGDefs from '../images/icons/defs.svg'

import GithubIcon from '../images/icons/github.svg';
import ReactIcon from '../images/icons/react.svg';

const ProjectsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Projects = edges
    .filter(edge => !!edge.node.frontmatter.visible) 
    .map(edge =>  <article key={edge.node.title} className="project-card">
      <Img className="project-image" fluid={edge.node.frontmatter.coverImage.childImageSharp.fluid} />
      <ProjectContent key={edge.node.id} post={edge.node}></ProjectContent>
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
    allMarkdownRemark {
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
              icon {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              link
              tooltip
            }
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