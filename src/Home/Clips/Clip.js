import React, { useEffect, useState } from "react";
import RemoveClip from "./RemoveClip";

const Clip = (props) => {
	return (
		<div>
			{props.clips.map((c) => {
				return (
					<div className="clip-list-container">
						<div className="clip-container">
							<div className="clip-message-container">
								<p className="clip-message">{c.text}</p>
								<p className="clip-info">
									{c.username} | {new Date(c.messaged_at).toLocaleTimeString()} {new Date(c.messaged_at).toLocaleDateString()}
								</p>
							</div>
							<div className="clip-button-controls">
								<RemoveClip clipId={c.clip_id} fetchClips={props.fetchClips} />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Clip;
