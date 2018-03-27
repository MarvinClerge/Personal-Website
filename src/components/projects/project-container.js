import React from 'react'
import projects from './project-data'
import ProjectCard from './project-card'

const ProjectContainer = props => {
  function mapProjects(){
    return projects.slice().map((project, index) => {
      return <ProjectCard key={index} {...project} />
    })
  }

  return(
    <div className="project-container">
      <h1>My Projects</h1>
      <div className="project-container-projects">
        {mapProjects()}
      </div>
    </div>
  )
}

export default ProjectContainer
