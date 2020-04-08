import React from "react"
import ProjectCard from "../components/ProjectCard"

const ProjectSet = ( {props} ) => {
    return props.map(prop => {
        return  <ProjectCard image={prop.image} title={prop.title} info={prop.description} icons={prop.icons.map(icon => {
           return <span className="icon"> <a href={icon.link}> <img className="" alt={icon.alt} src={icon.img}></img></a></span>
        })} />   
        })  
};

export default ProjectSet