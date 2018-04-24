import React from 'react'

const Header = props => {

  return (
    <header className="header">
      <h1 className='header-text'>
        <span className='header-main'>marvin clerge</span>
        <span className='header-sub'>full stack web developer</span>
      </h1>

      <ul className='icon-box'>
        <li className='icon'><a href="https://github.com/MarvinClerge" target="_blank" rel="noopener noreferrer">
          <img src={require('../images/github.png')} alt="icon"/>
        </a></li>

        <li className='icon'><a href="https://www.linkedin.com/in/marvinclerge/" target="_blank" rel="noopener noreferrer">
          <img src={require('../images/linkedin.png')} alt="icon"/>
        </a></li>

        <li className='icon'><a href="https://medium.com/@clergemarvin/" target="_blank" rel="noopener noreferrer">
          <img src={require('../images/medium.png')} alt="icon"/>
        </a></li>

        <li className='icon'><a href="https://twitter.com/MarvinClerge" target="_blank" rel="noopener noreferrer">
          <img src={require('../images/twitter.png')} alt="icon"/>
        </a></li>


      </ul>
    </header>
  )
}

export default Header;
