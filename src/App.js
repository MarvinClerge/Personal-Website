import React, { Component } from 'react';

import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'

class App extends Component {
  render(){
    return(
      <div className='app'>
        <Header />
        <About />
        <Project />
      </div>
    )
  }
}

export default App;
