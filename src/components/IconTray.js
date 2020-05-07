import React from "react"
import IconGithub from "./icon-components/IconGithub"
import IconLinkedIn from "./icon-components/IconLinkedIn"
import IconGooglePlay from "./icon-components/IconGooglePlay"
import IconWordpress from "./icon-components/IconWordpress"
import IconPhp from "../components/icon-components/IconPhp"
import IconLaravel from "../components/icon-components/IconLaravel"
import IconHeroku from "../components/icon-components/IconHeroku"

const IconTray = ({ icons }) => 
{
    const IconList = {
        "github": <IconGithub/>,
        "linkedin" : <IconLinkedIn/>,
        "googleplay" : <IconGooglePlay/>,
        "wordpress" : <IconWordpress/>,
        "laravel" : <IconLaravel/>,
        "heroku" : <IconHeroku/>,
        "php" : <IconPhp/>

    }
    const Iconset = icons
        .map(icon => 
                <div key={icons.indexOf(icon)} className='icon-wrap'>
                <a aria-label={icon.tooltip} href={icon.link} alt={icon.tooltip}> {IconList[icon.icon]} </a>
                <div className="project-tooltip">{icon.tooltip}</div>
                </div>)
    return (
    <div className="icon-tray" >
        {Iconset}
    </div>
)
}

export default IconTray