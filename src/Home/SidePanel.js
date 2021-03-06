import React, { Component } from "react";
import Clips from "./Clips";
import Profile from "./Profile";

class SidePanel extends Component {
	render() {
		return (
			<div className="side-panel-container">
				<Profile login={this.props.login} user={this.props.user} handleLogout={this.props.handleLogout} />
				<Clips clips={this.props.clips} fetchClips={this.props.fetchClips} />
			</div>
		);
	}
}

export default SidePanel;
