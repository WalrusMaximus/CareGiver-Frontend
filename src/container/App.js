import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
// test

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="body">
          <Switch>
            <Route
              exact path="/"
              render={() => {
                return (
                  <Landing/>
                )
              }}
              />
          </Switch>
          <Switch>
            <Route
              path="/profile"
              render={() => {
                return (
                  <Profile/>
                )
              }}
              />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
