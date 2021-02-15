import React, { Component } from "react";
import axios from "axios";
import LoginAuth  from "../auth/LoginAuth";

const SERVER_URL = "http://localhost:3000/logout";

export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleSuccessfulAuth(data) {
		this.props.handleLogin(data);

		// this is to handle redirection after a successful login
		this.props.history.push("/"); //history is a prop from react router
	}

	handleLogoutClick() {
		axios
			.delete(SERVER_URL, { withCredentials: true })
			.then(this.props.handleLogout())
			.catch((error) => {
				console.log("logout error", error);
			});
	}

	render() {
		return (
			<div className="login-signup-container">
				<h2>Status: {this.props.loggedInStatus}</h2>
				<LoginAuth handleSuccessfulAuth={this.handleSuccessfulAuth} />
        		<a className="btn btn-primary" onClick={() => this.handleLogoutClick()}>logout</a>
			</div>
		);
	}
}

export default Login;
