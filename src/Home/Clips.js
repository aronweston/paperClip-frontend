import React, { Component } from "react";
import Clip from "./Clips/Clip";
import RemoveClip from "./Clips/RemoveClip";
import CreateClip from "./Clips/CreateClip";
import CreateChat from "./Chat/CreateChat";
import axios from "axios";

const user = 1;
const SERVER_URL = `http://localhost:3000/user/${user}/clips`;

export class Clips extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: true,
			clips: [],
		};
	}

	fetchClips = () => {
		axios.get(SERVER_URL).then((response) => {
			this.setState({
				clips: [...response.data],
			});
			console.log(response.data);
		});
	};

	componentDidMount() {
		this.fetchClips();
	}

	render() {
		return (
			<div className="side-panel-bottom-container">
				<h2>Clips</h2>
				<div className="clip">
					<Clip clips={this.state.clips} />
				</div>
			</div>
		);
	}
}

export default Clips;
