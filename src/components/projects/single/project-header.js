import React from 'react'
import { Link } from 'react-router-dom'

const ProjectHeader = props => {
  return(
    <div className="project-header">
      <h1 className="project-header-name">{props.name}</h1>
      <p className="project-header-date">{props.date}</p>

      <p className="project-header-frontend">
        <Link to={props.frontend} target="_blank">
          Frontend
        </Link>
      </p>

      <p className="project-header-backend">
        <Link to={props.backend} target="_blank">
          Backend
        </Link>
      </p>

      <p className="project-header-description">
        {props.description}
      </p>
    </div>
  )
}

export default ProjectHeader
