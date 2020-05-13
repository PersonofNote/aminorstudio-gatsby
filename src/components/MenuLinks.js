import React from "react"
import { Link } from "gatsby"

const MenuLinks = ( {links} ) => {
    if (typeof window !== `undefined`) {
        var pagePath = window.location.href.split("/")
    } else pagePath = "/"
    var currentPage = pagePath[pagePath.length-1]
    return links.map(link => {
                if (link.name.toLowerCase() === currentPage) {
                    return <span className="top-menu-item active" key={link.name}><Link to={link.link} className="top-menu-link">{link.name}</Link></span>
                } else{
                    return <span className="top-menu-item" key={link.name}><Link to={link.link} className="top-menu-link">{link.name}</Link></span>
                }
            })
          
};

export default MenuLinks