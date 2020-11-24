import PropTypes from "prop-types"
import React, { Fragment, useEffect, useRef, useState } from 'react';
import MenuLinks from "./MenuLinks"
// TODO rework
import siteLogo from "../images/logo.png"
import IconArrow from "../components/icon-components/IconArrow.js"

const Header = (props) => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrolling(e.target.documentElement.scrollTop > 20);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);


  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);
  return(
    <header>
      <div className={`top-menu-anchor ${scrolling ? "scrolling" : ""}`}></div>
      <nav id='top-menu' className={`top-menu ${scrolling ? "scrolling" : ""}`}>
        <div className="logo-wrap">
        <a href="/"><img className="site-logo" alt="site-logo" src={siteLogo}></img></a>
        <div onClick={toggleOpen} className={`toggle-wrap ${isOpen ? "open" : ""}`}>
          <IconArrow stroke={props.arrowColor} />
        </div>
        </div>
        <div className={`menu-links ${isOpen ? "open" : "closed"}`}>
        <MenuLinks links={ props.links }/>
        </div>
      </nav>
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
