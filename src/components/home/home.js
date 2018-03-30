import React from 'react'
import Person from './person'
import Header from '../header'
import Footer from '../footer'
import ProjectContainer from '../projects/multiple/project-container'

const Home = props => {
  return(
    <div>
      <Header />
      <Person />
      <ProjectContainer />
      <Footer />
    </div>
  )
}

export default Home
