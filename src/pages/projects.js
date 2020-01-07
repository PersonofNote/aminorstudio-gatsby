import React from "react"
import { Link } from "gatsby"
import Card from "../components/ProjectCard"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>This is the Projects Page</h1>
    <p>Welcome to the Projects Placeholder Page</p>
    <Card />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectPage
