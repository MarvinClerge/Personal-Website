import React from 'react'

const About = props => {
  return(
    <section className='about'>
      <div className='marvin-box'>
        <img src={require('../images/marvin.JPG')} alt='marvin' />
      </div>

      <div className='about-text'>
        <h2 className='about-main'>A Passionate Coder</h2>
        <p className='about-sub'>
          Full stack web developer looking to leverage customer service
          skills and programming skills to make an impact
          in the web development community.
        </p>

        <p className='about-sub'>
          With experience in Ruby, Javascript and Python programming
          and a background in Healthcare services and IT support,
          I bring strong skills in problem-solving, technical learning
          and customer focus.
        </p>

        <p className='about-sub'>
        </p>

      </div>

    </section>
  )
}

export default About
