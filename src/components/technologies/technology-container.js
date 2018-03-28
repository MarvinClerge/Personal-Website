import React from "react"
import Technology from './technology'

const TechnologyContainer = props => {
  function mapTechnologies(){
    return props.tech.slice().map((tech, index) => {
      return <Technology key={index} {...tech}/>
    })
  }

  return(
    <div className="technology-container">
      <h3>Technology Used</h3>
      <p className="desktop">(hover for details)</p>
      <p className="mobile">(tap for details)</p>
      <div>
        {mapTechnologies()}
      </div>
    </div>
  )
}

export default TechnologyContainer;
