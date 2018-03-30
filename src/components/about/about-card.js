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
    <section className={`about-card ${props.color}`}>
      <h2>{props.title}</h2>
      {mapContent()}
    </section>
  )
}

export default AboutCard
