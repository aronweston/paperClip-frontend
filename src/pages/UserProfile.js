import React, { Component } from "react";

import axios from "axios";
import ProfileUpdate from "../auth/ProfileUpdate";
import "../app.css";
import "../aron.css";
import "../zoha.css";

const SERVER_URL = "http://localhost:3000/logout";

export class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);

    this.props.history.push("/");
  }

  render() {
    return (
      <div className="login-signup-container">
        <h1>Dashboard</h1>
        <h2>Status: {this.props.loggedInStatus}</h2>
      </div>
    );
  }
}

export default UserProfile;
