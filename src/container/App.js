import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import Search from '../components/Search';
import Provider from '../components/Provider';
import Admin from '../components/Admin';
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
          <Switch>
            <Route
              path="/search"
              render={() => {
                return (
                  <Search/>
                )
              }}
              />
          </Switch>
          <Switch>
            <Route
              path="/provider"
              render={() => {
                return (
                  <Provider/>
                )
              }}
              />
          </Switch>
          <Switch>
            <Route
              path="/admin"
              render={() => {
                return (
                  <Admin/>
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
