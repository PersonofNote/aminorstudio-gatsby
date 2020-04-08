import PropTypes from "prop-types"
import React from "react"
import MenuLinks from "./MenuLinks"
import siteLogo from "../images/logo.png"

const mainMenulinks = [
  {
    "link": "/projects",
    "name": "Projects"
  },
  {
    "link": "/bits",
    "name": "Bits"
  },
  {
    "link": "/posts",
    "name": "Thoughts"
  }
]

const Header = () => (
  <header>
    <div className="top-menu">
      <div className="menu-toggle"><a href="/"><img className="site-logo" alt="site-logo" src={ siteLogo }></img></a></div>
      <MenuLinks links={ mainMenulinks }/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteLogo: PropTypes.string,
  siteMenu: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
  siteLogo: siteLogo,
  siteMenu: [
    {
      "link": "/",
      "name": "Home"
    },
    {
      "link": "/projects",
      "name": "Projects"
    }
  ]
}


export default Header
