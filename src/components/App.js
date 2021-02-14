import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import "../app.css";
import "../aron.css";

import NavBar from "./NavBar";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
// import Dashboard from "../pages/Dashboard";

const SERVER_URL = "http://localhost:3000/logged_in";

class App extends Component {

  constructor() {
		super();

		this.state = {
			loggedInStatus: "NOT_LOGGED_IN",
			user: {},
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	checkLoginStatus() {
		axios
			.get(SERVER_URL, { withCredentials: true })
			.then((response) => {
				if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
					this.setState({
						loggedInStatus: "LOGGED_IN",
						user: response.data.user,
					});
				} else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
					this.setState({
						loggedInStatus: "NOT_LOGGED_IN",
						user: {},
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
		});
	}

  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route render={(props) => <Login {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} />} exact path={"/login"} />
            <div className="main-container">
              <Route exact path={"/home"} render={(props) => <Home {...props} loggedInStatus={this.state.loggedInStatus} />} />
            </div>
            <Route component={Landing} path="/" exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;


