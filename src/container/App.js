import React, { Component } from 'react';
import { Switch,
  Route,
  // Redirect
} from 'react-router-dom';

import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import Search from '../components/Search';
import Provider from '../components/Provider';
import Admin from '../components/Admin';
import axios from 'axios';

class App extends Component {

  state = {
    user: {

    },
    isLoggedIn: false,
    userEmail: "",
    userPassword: ""
  }

  componentDidMount() {

    var userQuery = "http://localhost:3001/api/user/5cf792dec2a554507a355435"

    axios({
      method: "get",
      url: userQuery,
    })
      .then(res => {
        console.log('Got response for the user')
        console.log(res)
      })
      .catch(() => {
        console.log("failed to get users")
      })
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSignIn = event => {
    event.preventDefault();
    console.log("Clicky")

    axios
      .post("http://localhost:3001/login", {
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword
      })
      .then(response => {
        localStorage.token = response.data.signedJwt;
        this.setState({
          isLoggedIn: true,
          user: response.data.user,
          profileId: response.data.user._id
        });

        console.log(this.state.user);
        console.log("Signed in")
        console.log(this.state.isLoggedIn)
      })
      .catch(err => console.log(err));
  };

  handleSignOut = () => {
    console.log("clicky")
    this.setState({
      userEmail: "",
      userPassword: "",
      isLoggedIn: false
    });
    localStorage.clear();
    window.location.href = "/"
  };

  render() {

    return (
      <div>
        <Header
          handleSignIn={this.handleSignIn}
          handleSignOut={this.handleSignOut}
          handleInput={this.handleInput}
          isLoggedIn={this.state.isLoggedIn}
        />
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
