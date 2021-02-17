<<<<<<< HEAD
import React, { Component } from "react";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import "../app.css";
import "../aron.css";
import "../zoha.css";
=======
import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import '../app.css';
import '../aron.css';
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d

//Pages & Components
import NavBar from './NavBar';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Login from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import SubHeader from './SubHeader';

const SERVER_URL = 'http://localhost:3000/logged_in';

class App extends Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      loggedInStatus: "NOT_LOGGED_IN",
=======
      loggedInStatus: 'NOT_LOGGED_IN',
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get(SERVER_URL, { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
<<<<<<< HEAD
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
=======
          this.state.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
<<<<<<< HEAD
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
=======
          this.state.loggedInStatus === 'LOGGED_IN'
        ) {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d
            user: {},
          });
        }
      })
      .catch((error) => {
<<<<<<< HEAD
        console.log("check login error", error);
=======
        console.log('check login error', error);
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
<<<<<<< HEAD
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
    // <Route exact path="/landing">
    // 	<Redirect push to="/landing" />
    // </Route>
=======
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    });
    return <Redirect to='/landing' />;
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d
  }

  handleLogin(data) {
    this.setState({
<<<<<<< HEAD
      loggedInStatus: "LOGGED_IN",
=======
      loggedInStatus: 'LOGGED_IN',
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d
      user: data.user,
    });
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <NavBar
          login={this.state.loggedInStatus}
          handleLogout={this.handleLogout}
          handleLogoutClick={this.handleLogoutClick}
          user={this.state.user}
        />
        <BrowserRouter>
          <Switch>
            <Route component={Landing} path="/landing" exact />
            <div className="main-container">
=======
      <div className='App'>
        <SubHeader />
        <NavBar login={this.state.loggedInStatus} user={this.state.user} />
        <BrowserRouter>
          <Switch>
            <Route component={Landing} path='/landing' exact />
            <div className='main-container'>
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d
              <Route
                render={(props) => (
                  <Login
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
                exact
<<<<<<< HEAD
                path={"/login"}
              />

=======
                path={'/login'}
              />
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d
              <Route
                render={(props) => (
                  <SignUp
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
                exact
<<<<<<< HEAD
                path={"/signup"}
              />

              <Route
                exact
                path={"/"}
                render={(props) => (
                  <Home {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />
=======
                path={'/signup'}
              />
              <Route
                exact
                path={'/'}
                render={(props) => (
                  <Home
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                    handleLogout={this.handleLogout}
                    handleLogoutClick={this.handleLogoutClick}
                  />
                )}
              />
              <Route render={NotFound} />
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
