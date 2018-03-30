import React from 'react'

const ProjectFeature = props => {
  function mapFeature(){
    return props.features.slice().map((feature, index) => {
      return (
        <div key={index}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      )
    })
  }

  return(
    <section className="project-feature">
      {mapFeature()}
    </section>
  )
}

export default ProjectFeature
