import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
// test

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <p>Landing</p>
        <Footer/>
      </div>
    );
  }
}

export default App;
