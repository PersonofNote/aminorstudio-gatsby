import React from "react"
import { Link } from "gatsby"
import IconTray from "./IconTray"

const ProjectContent = ({ content }) => 
{
    return (
    <div>
        <Link to={content.fields.slug}>
        <span className="shrink"><h2>{content.frontmatter.title}</h2></span>
        <div className="content">{content.frontmatter.description}</div>
        </Link>
        <IconTray icons={content.frontmatter.icons} />
    </div>
)
}

export default ProjectContent