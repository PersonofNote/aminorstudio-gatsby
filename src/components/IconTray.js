import React from "react"
import IconGithub from "./icon-components/IconGithub"
import IconLinkedIn from "./icon-components/IconLinkedIn"
import IconGooglePlay from "./icon-components/IconGooglePlay"
import IconWordpress from "./icon-components/IconWordpress"

const IconTray = ({ icons }) => 
{
    const IconList = {
        "github": <IconGithub/>,
        "linkedin" : <IconLinkedIn/>,
        "googleplay" : <IconGooglePlay/>,
        "wordpress" : <IconWordpress/>
    }
    console.log(IconList);
    const Iconset = icons
        .map(icon => <a key={icon.index} aria-label={icon.tooltip} href={icon.link} alt={icon.tooltip}> {IconList[icon.icon]}  </a>)
    return (
    <div className="icon-tray" >
        {Iconset}
    </div>
)
}

export default IconTray