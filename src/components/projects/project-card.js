import React from 'react'
// import { Link } from 'react-router-dom'

const ProjectCard = props => {

  function shortDescription(){
    if (props.description.length <= 119) {
      return props.description
    } else {
      return props.description.substr(0, 119) + "..."
    }
  }

  return(
    <div className="project-card">
      <div className="project-card-header">
        <h2>{props.name}</h2>
        <p>{shortDescription()}</p>
      </div>
      <img src={props.images[0]} alt={props.name + "screenshot"}/>
    </div>
  )
}

export default ProjectCard
