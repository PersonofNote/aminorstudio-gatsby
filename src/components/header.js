import PropTypes from "prop-types"
import React from "react"
import MenuLinks from "./MenuLinks"


const mainMenulinks = [
  {
    "link": "/",
    "name": "Home"
  },
  {
    "link": "/projects",
    "name": "Projects"
  },
  {
    "link": "/bits",
    "name": "Bits"
  }
]

const Header = ({ siteLogo }) => (
  <header>
    <div className="top-menu">
      <img alt="site-logo" src={ siteLogo }></img>
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
  siteLogo: `../src/images/logo.png`,
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
