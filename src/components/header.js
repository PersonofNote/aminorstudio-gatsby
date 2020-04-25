import PropTypes from "prop-types"
import React, { Fragment, useEffect, useRef, useState } from 'react';
import MenuLinks from "./MenuLinks"
import siteLogo from "../images/logo.png"
import { Controller, Scene } from 'react-scrollmagic';
import IconArrow from "../components/icon-components/IconArrow.js"

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

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);
  return(
    <header>
      <Controller>
      <div className='top-menu-anchor'></div>
      <Scene classToggle={"#top-menu", "scrolling"} triggerHook={0} pin>
        <nav id='top-menu' className="top-menu">
          <div className="logo-wrap">
            <a href="/"><img className="site-logo" alt="site-logo" src={ siteLogo }></img></a>
            <div onClick={toggleOpen} className={`toggle-wrap ${isOpen ? "open" : ""}`}>
              <IconArrow />
            </div>
          </div>
          <div className={`menu-links ${isOpen ? "open" : "closed"}`}>
            <MenuLinks links={ mainMenulinks }/>
          </div>
        </nav>
      </Scene>
    </Controller>

    </header>
  )
}

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
