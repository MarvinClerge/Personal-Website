import React, { Component } from 'react';
import {Route} from 'react-router-dom'
// import logo from './logo.svg';
import Header from './components/header'
import Person from './components/person'
import ProjectContainer from './components/projects/project-container'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Route exact path="/" render={routerProps => {
          return(
            <div>
              <Person />
              <ProjectContainer />
            </div>
          )
        }}/>
      </div>
    );
  }
}

export default App;
