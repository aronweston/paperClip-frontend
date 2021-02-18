import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { LOGOUT, LOGGED_IN } from "../auth/serverData";
import Platform from "../home/Platform";
import axios from "axios";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
		};

		// const getUserData = () => {
		// 	axios.get(LOGGED_IN, { withCredentials: true }).then((response) => {
		// 		this.setState({
		// 			user: response.data.user,
		// 		});
		// 	});
		// };
		// getUserData();
	}

	handleLogoutClick = () => {
		axios
			.delete(LOGOUT, { withCredentials: true })
			.then(this.props.handleLogout)
			.catch((error) => {
				console.log("logout error", error);
			});
	};

	render() {
		if (!this.props.loggedInStatus === "LOGGED_IN") {
			return <Redirect to="/login" />;
		}

		return (
			<>
				<div className="platform-container">
					<Platform login={this.props.login} user={this.props.user} handleLogout={this.props.handleLogout} />
				</div>
			</>
		);
	}
}
export default Home;
