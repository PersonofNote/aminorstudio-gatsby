import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MenuLinks from "./MenuLinks"

let mainMenulinks = [
  {"link": "/",
    "name": "Home"
  },
  {"link": "/projects",
    "name": "Projects"
  }
]

const Header = ({ siteLogo }) => (
  <header>
    <MenuLinks links= { mainMenulinks }/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteLogo: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteLogo:``
}


export default Header
