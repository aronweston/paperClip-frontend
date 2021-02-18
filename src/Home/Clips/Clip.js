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
									{c.username} | {c.messaged_at}
								</p>
							</div>
							<div className="clip-button-controls">
								<RemoveClip />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Clip;
