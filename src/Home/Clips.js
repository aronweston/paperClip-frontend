import React, { Component } from "react";
import Clip from "./Clips/Clip";
import RemoveClip from "./Clips/RemoveClip";
import CreateClip from "./Clips/CreateClip";
import CreateChat from "./Chat/CreateChat";

export class Clips extends Component {
	render() {
		return (
			<div className="side-panel-bottom-container">
				<h2>Clips</h2>
				<div className="clip">
					<Clip clips={this.props.clips} fetchClips={this.props.fetchClips} />
				</div>
			</div>
		);
	}
}

export default Clips;
