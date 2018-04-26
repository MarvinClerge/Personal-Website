import React, { Component } from 'react';

import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'

class App extends Component {
  render(){
    return(
      <div className='app'>
        <Header />
        <About />
        <Project />
        <Footer />
      </div>
    )
  }
}

export default App;
