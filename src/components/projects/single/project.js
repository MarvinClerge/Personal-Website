import React, { Component } from 'react'
import projects from '../project-data'
import ProjectHeader from './project-header'
import ProjectFeature from './project-feature'
import MediaContainter from '../../media/media-container'
import TechnologyContainer from '../../technologies/technology-container'

class Project extends Component {
  state = {
    project: null
  }

  componentWillMount(){
    this.setState({
      project: this.findProject()
    })
  }

  findProject = () => {
    const pathName = this.props.router.location.pathname.split("/")[2]
    return projects.find(element => {
      return element.name.toLowerCase().replace(/ /g, "-") === pathName
    })
  }

  render(){
    return(
      <div className="project">
        <ProjectHeader {...this.state.project}/>
        <MediaContainter images={this.state.project.images} videoId={this.state.project.videoId}/>
        <TechnologyContainer tech={this.state.project.tech}/>
        <ProjectFeature features={this.state.project.features}/>
      </div>
    )
  }
}

export default Project
