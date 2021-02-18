import React, { Component } from "react";
import { LOGGED_IN } from "../auth/serverData";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import "../app.css";
import "../aron.css";
import "../zoha.css";

//Pages & Components
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Login from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import UserProfile from "../pages/UserProfile";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      loggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get(LOGGED_IN, { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
            loggedIn: true,
          });
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
      loggedIn: true,
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar login={this.state.loggedInStatus} user={this.state.user} />
        <BrowserRouter>
          <Switch>
            {/* {this.props.location.pathname === "/signup" ||
            this.props.location.pathname === "/landing" ? (
              ""
            ) : (
              <NavBar />
            )} */}

            <Route component={Landing} path="/landing" exact />
            <div className="main-container">
              <Route
                render={(props) => (
                  <Login
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus}
                    user={this.state.user}
                  />
                )}
                exact
                path={"/login"}
              />
              <Route
                render={(props) => (
                  <SignUp
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus}
                    user={this.state.user}
                  />
                )}
                exact
                path={"/signup"}
              />
              <Route
                exact
                path={"/"}
                render={(props) => (
                  <Home
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                    handleLogout={this.handleLogout}
                    handleLogoutClick={this.handleLogoutClick}
                    user={this.state.user}
                  />
                )}
              />
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
