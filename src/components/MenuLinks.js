import React from "react"
import { Link } from "gatsby"

const MenuLinks = ( {links} ) => {
        return links.map(link => {
                  return <span className="top-menu-item" key={link.index}><Link to={link.link} className="top-menu-link">{link.name}</Link></span>
              })
          
};

export default MenuLinks