import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

  render(){
    return(
      <div className="header">
        <div className="header-main">
          <a href="" className="header-main-link">Projects</a>
          <Link to="/"><div className="header-logo"></div></Link>
          <a href="" className="header-main-link">About Me</a>
        </div>

        <div className="header-links">
          <Link to="https://github.com/MarvinClerge" target="_blank" rel="noopener noreferrer">
            <img className="header-link" src={require('../images/icons/github.png')} alt="github" />
          </Link>

          <Link to="https://www.linkedin.com/in/marvinclerge/" target="_blank" rel="noopener noreferrer">
            <img className="header-link" src={require('../images/icons/linkedin.png')} alt="linkedin" />
          </Link>

          <Link to="https://twitter.com/MarvinClerge" target="_blank" rel="noopener noreferrer">
            <img className="header-link" src={require('../images/icons/twitter.png')} alt="twitter" />
          </Link>

          <Link to="https://medium.com/@clergemarvin/" target="_blank" rel="noopener noreferrer">
            <img className="header-link" src={require('../images/icons/medium.png')} alt="medium" />
          </Link>
          
        </div>
      </div>
    )
  }
}

export default Header
