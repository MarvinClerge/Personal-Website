import React from 'react'

const Footer = props => {

  function scrollTop(event){
    event.preventDefault()
    window.scroll(0,0)
  }

  return(
    <footer className='footer'>
      <p className='footer-text' >Made by Marvin Clerge</p>
      <a className='footer-top'  href="" onClick={scrollTop}>go to top</a>
    </footer>
  )
}

export default Footer;
