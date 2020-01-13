/**
 *  Component: Project Card
 *  Will take a set of project information
 *  Will include title, link, description, image, icon tray
 * 
 */

import React from "react"

class ProjectCard extends React.Component {
    render(){
    return(
        <div className = "project-card">
            <a href={this.props.link}>
            <img className="project-image" src={this.props.image} className = "project-image"></img>
            <h2> {this.props.title}</h2>
            <p> {this.props.info}</p>
            </a>
            <div className="icon-tray">{this.props.icons}</div>
        </div>
    )
    }
}

export default ProjectCard