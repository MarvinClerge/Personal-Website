import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/home/home'
import ErrorPage from './components/error-page'
import AboutContainer from './components/about/about-container'
import Project from './components/projects/single/project'

class App extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project/" component={Project} />
        <Route path="/about" component={AboutContainer} />
        <Route component={ErrorPage} />
      </Switch>
    )
  }
}

export default App;
