import React from "react"
import ProjectSet from "../components/ProjectSet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SpacepostImage from "../images/project-splash/spacepost.png"
import iPhoneImage from "../images/project-splash/iphone-screenshot.png"

import SVGDefs from '../images/icons/defs.svg'

import GithubIcon from '../images/icons/github.svg';
import ReactIcon from '../images/icons/react.svg';

import ProjectsList from '../components/ProjectsList';



const ProjectPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects Placeholder Page</h1>
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}></div>
    <div className="">
      <ProjectsList />
    </div>
  </Layout>
)

export default ProjectPage
