import React from "react"
import { Link } from "gatsby"
import IconTray from "./IconTray"

const ProjectContent = ({ content }) => 
{
    return (
    <div>
        <Link to={content.fields.slug}>
        <h2>{content.frontmatter.title}</h2>
        </Link>
        <div>{content.frontmatter.description}</div>
        <IconTray icons={content.frontmatter.icons} />
    </div>
)
}

export default ProjectContent