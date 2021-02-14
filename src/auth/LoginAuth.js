import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/sessions";

export class LoginAuth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			// email: "",
			password: "",
			LoginErrors: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		// const { username, email, password } = this.state;
		const { username, password } = this.state;

		axios
			.post(
				SERVER_URL,
				{
					user: {
						username,
						// email,
						password,
					},
				},
				{ withCredentials: true }
			)
			.then((response) => {
				if (response.data.logged_in) {
					this.props.handleSuccessfulAuth(response.data);
				}
			})
			.catch((error) => {
				console.log("login error", error);
			});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required />
					{/* <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required /> */}
					<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
					<button type="submit">Login</button>
					<p>Test with user:<strong> ac</strong> and password: <strong>chicken</strong></p>
				</form>
			</div>
		);
	}
}

export default LoginAuth;
