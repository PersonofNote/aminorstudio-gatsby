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

const Header = () =>{
  /*
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    console.log(ref); // WHY
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  */

  return(
    <header>
      <Controller>
      <div className='top-menu-anchor'></div>
      <Scene classToggle={"#top-menu", "scrolling"} triggerHook={0} pin>
        <nav id='top-menu' className="top-menu">
          <div className="logo-wrap">
            <a href="/"><img className="site-logo" alt="site-logo" src={ siteLogo }></img></a>
            <IconArrow />
          </div>
          <MenuLinks links={ mainMenulinks }/>
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
