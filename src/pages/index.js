import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IconGithub from "../components/icon-components/IconGithub"
import IconTwitter from "../components/icon-components/IconTwitter"
import IconLinkedIn from "../components/icon-components/IconLinkedIn"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="intro-image"></div>
    <p className="center">Front end developer specializing in thoughtful, interactive user experiences.</p>
    <div className="front-page-icons"><a href="https://github.com/PersonofNote"><IconGithub/></a> <a href="https://www.linkedin.com/in/jessica-lee-taylor-martin/"><IconLinkedIn/></a><a href="https://twitter.com/Person_of_note"><IconTwitter/></a></div>
  </Layout>
)

export default IndexPage

