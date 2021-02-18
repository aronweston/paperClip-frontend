import React, { Component } from "react";
import { REGISTRATIONS } from "../auth/serverData";
import axios from "axios";

export class Registration extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
			registrationErrors: "",
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

		const { username, email, password, password_confirmation } = this.state;

		axios
			.post(
				REGISTRATIONS,
				{
					user: {
						username,
						email,
						password,
						password_confirmation,
					},
				},
				{ withCredentials: true }
			)
			.then((response) => {
				if (response.data.status === "created") {
					this.props.handleSuccessfulAuth(response.data);
				}
			})
			.catch((error) => {
				console.log("registration error", error);
			});
	}

	render() {
		return (
			<>
				<h1>Sign up</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required />
					<input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
					<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
					<input
						type="password"
						name="password_confirmation"
						placeholder="Password confirmation"
						value={this.state.password_confirmation}
						onChange={this.handleChange}
						required
					/>
					<button type="submit">Sign up</button>
				</form>
			</>
		);
	}
}

export default Registration;
