import React, { useEffect, useState } from "react";
import RemoveClip from "./RemoveClip";

const Clip = (props) => {
	if (props && props.clips === null) {
		return "";
	} else {
		// console.log(props);
		// console.log("heretop", props.clips[0].username);
		// console.log("here", props.clips[1].text);
		return (
			<div>
				{props.clips.map((c) => {
					<div className="clip-list-container">
						<div className="clip-container">
							<div className="clip-message-container">
								<p className="clip-message">{c.text}</p>
								<p className="clip-info">
									{c.username} | {c.messaged_at}
									{/* {props.clips[0].username} | {props.clips[0].messaged_at} */}
								</p>
							</div>
							<div className="clip-button-controls">
								<RemoveClip />
							</div>
						</div>
					</div>;
				})}
			</div>
		);
	}
};

export default Clip;
