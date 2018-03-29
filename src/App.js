import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import logo from './logo.svg';

import Header from './components/header'
import Person from './components/person'
import Footer from './components/footer'

import AboutContainer from './components/about/about-container'

import Project from './components/projects/single/project'
import ProjectContainer from './components/projects/multiple/project-container'

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />

        {/* Main Page */}
        <Route exact path="/" render={routerProps => {
          window.scrollTo(0,0);
          return(
            <div>
              <Person />
              <ProjectContainer />
            </div>
          )
        }}/>

        {/* Project Page */}
        <Route path="/project/" render={routerProps => {
          window.scrollTo(0,0);
          return(
            <div>
              <Project router={routerProps} />
            </div>
          )
        }}/>

        {/* About Page */}
        <Route path="/about" render={routerProps => {
          window.scrollTo(0,0);
          return(
            <div>
              <AboutContainer />
            </div>
          )
        }}/>

        <Footer />
      </div>
    );
  }
}

export default App;
