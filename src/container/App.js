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
    provider: {

    },
    isSignedIn: false,
    email: "",
    password: "",

  }

  componentDidMount() {

    var userQuery = "http://localhost:3001/api/user/5cf792dec2a554507a355435"
    axios({
      method: "get",
      url: userQuery,
    })
      .then(res => {
        this.setState({
          user: res.data
        })
        console.log(this.state.user)
      })
      .catch(() => {
        console.log("failed to get users")
      })
    axios({
      method: "get",
      url: "http://localhost:3001/api/post/"
    })
      .then(res => {
        const posts = [];

        res.data.filter(ele => {
          return ele.city._id === this.state.cityId;
        }).map((ele) => {
          return posts.push(ele);
        })

        this.setState({
          posts
        })
        console.log(this.state.posts)
      })
      .catch(() => {
        console.log("Couldn't get posts")
      })
  }

    

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.getPosts()
  };

  handleSignUp = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/user/signup", {
        fullName: this.state.fullName,
        email: this.state.email,
        userType: this.state.userType,
        userPassword: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.signedJwt;

        this.setState({
          isLoggedIn: true,
          user: response.data.user
        });
      })
      .catch(err => console.log(err));
  };

  handleSignIn = event => {
    event.preventDefault();
    console.log("Clicky")
    console.log(this.state.email)
    console.log(this.state.password)

    axios
      .post("http://localhost:3001/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.signedJwt;
        this.setState({
          isSignedIn: true,
          user: response.data.user,
          profileId: response.data.user._id
        });

        console.log(this.state.user);
        console.log("Signed in")
        console.log(this.state.isSignedIn)
      })
      .catch(err => console.log(err));
  };

  handleSignOut = () => {
    console.log("clicky")
    this.setState({
      userEmail: "",
      userPassword: "",
      isSignedIn: false
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
          handleSignUp={this.handleSignUp}
          isSignedIn={this.state.isSignedIn}
          user={this.state.user}
        />
        <div className="body">
          <Switch>
            <Route
              exact path="/"
              render={() => {
                if (this.state.isSignedIn) 
                  (
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
                  <Profile
                    posts={this.state.posts}
                    user={this.state.user}
                  />
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
                  <Provider
                  user={this.state.user}
                  />
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
