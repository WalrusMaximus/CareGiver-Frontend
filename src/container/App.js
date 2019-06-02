import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
// test

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Landing/>
        <Footer/>
      </div>
    );
  }
}

export default App;
