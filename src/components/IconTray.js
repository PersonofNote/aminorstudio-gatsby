import React from "react"
import IconGithub from "./icon-components/IconGithub"
import IconLinkedIn from "./icon-components/IconLinkedIn"
import IconGooglePlay from "./icon-components/IconGooglePlay"
import IconWordpress from "./icon-components/IconWordpress"
import IconPhp from "../components/icon-components/IconPhp"
import IconLaravel from "../components/icon-components/IconLaravel"
import IconHeroku from "../components/icon-components/IconHeroku"
import IconZeit from "../components/icon-components/IconZeit"
import IconReact from "../components/icon-components/IconReact"
import IconGatsby from "../components/icon-components/IconGatsby"
import IconItchIo from "../components/icon-components/IconItchIo"
import IconAWS from "../components/icon-components/IconAWS"
import IconLink from "../components/icon-components/IconLink"

const IconTray = ({ icons }) => 
{
    const IconList = {
        "github": <IconGithub/>,
        "linkedin" : <IconLinkedIn/>,
        "googleplay" : <IconGooglePlay/>,
        "wordpress" : <IconWordpress/>,
        "laravel" : <IconLaravel/>,
        "heroku" : <IconHeroku/>,
        "php" : <IconPhp/>,
        "zeit": <IconZeit/>,
        "react" : <IconReact/>,
        "gatsby": <IconGatsby/>,
        "itchio": <IconItchIo/>,
        "aws": <IconAWS/>,
        "link": <IconLink/>
    }
    const Iconset = icons.map(icon => 
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