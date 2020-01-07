import React from "react"
import { Link } from "gatsby"

const MenuLinks = ( {links} ) => {
        return links.map(link => {
                  return <span className="top-menu-item" key={link.index}><a className="top-menu-link" href={link.link}>{link.name}</a></span>
              })
          
};

export default MenuLinks