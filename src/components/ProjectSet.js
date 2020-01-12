import React from "react"
import ProjectCard from "../components/ProjectCard"

const ProjectSet = ( {props} ) => {
    return props.map(prop => {
        return  <ProjectCard image={prop.image} title={prop.title} info={prop.description} icons={prop.icons.map(icon => {
           return <span> <img className="icon" src={icon}></img>{icon}</span>
        })} />   
        })  
};

export default ProjectSet