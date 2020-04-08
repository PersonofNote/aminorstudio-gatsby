import React from "react"
import ProjectData from "../../content/projects-content.yml"

const Projects = () => (
    <ul className='projects-container undecorated'>
      {ProjectData.map((data, index) => {
        let imgSrc = data.project.image;
        return (
        <li className="project-card" key={`content_item_${index}`}>
          {data.project.title} <img src={imgSrc}></img> 
          {data.project.description}
          <div className='icon-tray'>{data.project.iconset}</div>
        </li>
        )
      })}
    </ul>
)
export default Projects