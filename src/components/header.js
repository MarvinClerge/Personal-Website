import React, {Component} from 'react'

class Header extends Component {

  render(){
    return(
      <div className="header">
        <div className="header-main">
          <a href="" className="header-main-link">Projects</a>
          <a href=""><div className="header-logo"></div></a>
          <a href="" className="header-main-link">About Me</a>
        </div>

        <div className="header-links">
          <a href="https://github.com/MarvinClerge" target="_blank">
            <img className="header-link" src={require('../images/icons/github.png')} alt="github" />
            </a>

            <a href="https://www.linkedin.com/in/marvinclerge/" target="_blank">
            <img className="header-link" src={require('../images/icons/linkedin.png')} alt="linkedin" />
            </a>

            <a href="https://twitter.com/MarvinClerge" target="_blank">
              <img className="header-link" src={require('../images/icons/twitter.png')} alt="twitter" />
              </a>

              <a href="https://medium.com/@clergemarvin/" target="_blank">
            <img className="header-link" src={require('../images/icons/medium.png')} alt="medium" />
          </a>
        </div>
      </div>
    )
  }
}

export default Header
