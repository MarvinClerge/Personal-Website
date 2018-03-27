import React, {Component} from 'react'

class Person extends Component {
  render(){
    return(
      <div className="person">
        <img src={require("../images/marvin.jpeg")} alt="marvin clerge" className="person-image" />
        <div className="person-summary">
          Full stack web developer looking to leverage customer service skills and new found programming skills to make an impact in the web development community.
          With experience in Ruby on Rails and JavaScript based programming and a background in Healthcare services and IT support,
          I bring strong skills in problem solving, technical learning and customer focus. Gaming enthusiast.
        </div>
      </div>
    )
  }
}

export default Person
