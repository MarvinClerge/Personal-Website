import React, { Component } from 'react';
import {Route} from 'react-router-dom'
// import logo from './logo.svg';
import Header from './components/header'
import Footer from './components/footer'
import Person from './components/person'
import ProjectContainer from './components/projects/multiple/project-container'
import Project from './components/projects/single/project'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        {/* Main Page */}
        <Route exact path="/" render={routerProps => {
          return(
            <div>
              <Person />
              <ProjectContainer />
            </div>
          )
        }}/>

        {/* Project Page */}
        <Route path="/project/" render={routerProps => {
          return(
            <div>
              <Project router={routerProps} />
            </div>
          )
        }}/>

        <Footer />
      </div>
    );
  }
}

export default App;
