import React, { Component } from "react";
import axios from "axios";
import { Login } from "./auth/Login";
import Registration from "./auth/Registration";

const SERVER_URL = "http://localhost:3000/logout";

export class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleSuccessfulAuth(data) {
		this.props.handleLogin(data);

		// this is to handle redirection after a successful login
		this.props.history.push("/dashboard"); //history is a prop from react router
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
			<div>
				<h1>Home</h1>
				<h1>Status: {this.props.loggedInStatus}</h1>
				<button onClick={() => this.handleLogoutClick()}>Logout</button>
				<Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
				<Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
			</div>
		);
	}
}

export default Home;
