import React, { Component } from 'react';
import {Route} from 'react-router-dom'
// import logo from './logo.svg';
import Header from './components/header'
import Person from './components/person'

class App extends Component {
  render() {
    return (
      <Route exact path="/" render={routerProps => {
        return(
          <div className="app">
            <Header />
            <Person />
          </div>
        )
      }}/>
    );
  }
}

export default App;
