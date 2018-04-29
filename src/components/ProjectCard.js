import React from 'react'

class ProjectCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      active: false
    }
  }

  mapFeatures(){
    return Object.keys(this.props.features).map((key, index) => {
      return (
        <div key={index}>
          <h3 className='projectcard-title' >{key}</h3>
          <p className='projectcard-paragraph' >{this.props.features[key]}</p>
        </div>
      )
    })

  }

  render(){
    return (
      <div className='projectcard'>
        <div className='projectcard-video'>
          <iframe
            width={window.outerWidth - 50}
            height="315"
            src={`https://www.youtube.com/embed/${this.props.videoID}`}
            title={this.props.name}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <div className='projectcard-info'>
          <h2>
            {this.props.name}
            <span><a href={this.props.frontend} target="_blank" rel="noopener noreferrer">
              View on Github
            </a></span>
          </h2>
          <p>{this.props.description}</p>
          {this.mapFeatures()}
        </div>
      </div>
    )
  }
}

export default ProjectCard
