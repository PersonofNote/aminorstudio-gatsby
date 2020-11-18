/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import IconGithub from "./icon-components/IconGithub"
import IconLinkedIn from "./icon-components/IconLinkedIn"
import IconTwitter from "./icon-components/IconTwitter"

import Header from "./header"
import "./variables.less"
import "./layout.css"
import "./styles.css"
import "./header.less"

//import posthog from 'posthog-js';
//posthog.init('btpeYhapj5ZqiaNlJBzXk3ohnhRAxrgyHtwBdSNH-7s', {api_host: 'https://aminorstudio-analytics.herokuapp.com'});

const mainMenulinks = [
  {
    "link": "/about",
    "name": "About"
  },
  {
    "link": "/projects",
    "name": "Projects"
  },
  {
    "link": "/posts",
    "name": "Posts"
  }
]


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          logo
        }
      }
    }
  `)


  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} siteLogo={data.logo} links={mainMenulinks} arrowColor={'orange'}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main style={{
          marginTop: `1rem`
        }}>{children}</main>
        <footer style={{
          display: `flex`,
          flexDirection: `row`,
          padding: `0.8rem`,
          justifyContent: `flex-start`
        }}>
          © {new Date().getFullYear()} A Minor Studio <div className="footer-icons"><a href="https://github.com/PersonofNote"><IconGithub/></a> <a href="https://www.linkedin.com/in/jessica-lee-taylor-martin/"><IconLinkedIn/></a><a href="https://twitter.com/Person_of_note"><IconTwitter/></a></div>
        </footer>
      </div>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
