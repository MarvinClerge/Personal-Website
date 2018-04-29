import React from 'react'

const About = props => {
  return(
    <section className='about'>
      <div className='marvin-box'>
        <img src={require('../images/marvin.JPG')} alt='marvin' />
      </div>

      <div className='about-text'>
        <p className='about-sub' id='about-intro'>
          Hi there, I'm Marvin Clerge.
        </p>

        <p className='about-sub'>
          I'm a full stack web developer who codes in Ruby, JavaScript, and Python.
          I mostly make my web applications using React and Ruby on Rails.
          I also write Python scripts and build computers.
        </p>

        <p className='about-sub'>
          Since I was young I've always had a passion for coding.
          I would write small CLI applications such as calculators and text adventures.
          That is a passion that I have carried with me to this day.
        </p>

        <p className='about-sub'>
          Currently, I'm seeking new opportunists to learn and grow as a developer.
        </p>

      </div>

    </section>
  )
}

export default About
