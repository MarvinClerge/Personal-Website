import React from 'react'

const AboutCard = props => {
  function mapContent(){
    return props.content.slice().map((element, index) => {
      return(
        <p key={index} className="about-card-content">
          {element}
        </p>
      )
    })
  }

  return(
    <div className={`about-card ${props.color}`}>
      <h2>{props.title}</h2>
      {mapContent()}
    </div>
  )
}

export default AboutCard
