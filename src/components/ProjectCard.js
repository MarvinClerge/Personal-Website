import React from 'react'

class ProjectCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      active: false
    }
  }

  render(){
    console.log(this.props);
    return (
      <div className='projectcard'>
        <div className='projectcard-video'>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${this.props.videoID}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>

        <div className='projectcard-info'>
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default ProjectCard

{/* <p>{this.props.name}</p>
<p>{this.props.date}</p>
<p>{this.props.description}</p>
<p>{this.props.frontend}</p>
<p>{this.props.backend}</p>
<p>{this.props.backend}</p> */}
