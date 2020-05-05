import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
//import FilterContent from "../components/Filtercontent"
import ProjectContent from "../components/ProjectContent"
import "../components/projects.less"



const tags = ['all','javascript', 'php', 'css', 'github', 'laravel', "heroku", "wordpress", "googleplay", "games", "design", "art"]

const ProjectsPage = props => {
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
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
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

  const TagButtons = tags.map(tag => (
    <button className='filter-button' key={tag} value={tag === 'all' ? "" : tag} onClick={handleInputChange}>{tag}</button>
  ))

  const Projects = posts
      .filter(edge => !!edge.node.frontmatter.visible) 
      .map(edge =>  <article  style={{position: `relative`}} key={edge.node.title} className="project-card">
        <Img className="project-image" fluid={edge.node.frontmatter.coverImage.childImageSharp.fluid} />
        <ProjectContent key={edge.node.id} content={edge.node}></ProjectContent>
        </article>)

  return (
    <Layout>
    <SEO title="Projects" />
    <div className='tag-cloud'>{TagButtons}</div>
    <div style={{maxWidth: `960px`, margin: `1.45rem`}}></div>
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