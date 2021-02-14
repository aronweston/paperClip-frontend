import React, { Component } from "react";
import axios from "axios";
import LoginAuth  from "../auth/LoginAuth";
import Registration from "../auth/Registration";

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
			.then((response) => {
				this.props.handleLogout();
			})
			.catch((error) => {
				console.log("logout error", error);
			});
	}

	render() {
		return (
			<>
				<h1>Home</h1>
				<h1>Status: {this.props.loggedInStatus}</h1>
				<button onClick={() => this.handleLogoutClick()}>Logout</button>
				<Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
				<LoginAuth handleSuccessfulAuth={this.handleSuccessfulAuth} />
			</>
		);
	}
}

export default Login;
