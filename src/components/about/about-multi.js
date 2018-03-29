import React from 'react'

const AboutMulti = props => {
  function renderTopics(){
    return props.topics.slice().map((topic, index) => {
      return(
        <div className="about-multi-topic" key={index}>
          <h3>{topic.title}</h3>
          <p>{topic.content}</p>
        </div>
      )
    })
  }

  return(
    <div className="about-multi">
      <h2>{props.title}</h2>
      {renderTopics()}
    </div>
  )
}

export default AboutMulti
