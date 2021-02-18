import React from "react";
import CreateClip from "../Clips/CreateClip";

const ChatMessageRecipient = (props) => {
	const createdAt = props.message.message.created_at;
	return (
		<div className="chat-row-recipient">
			<CreateClip message={props.message} user={props.user} fetchClips={props.fetchClips} />
			<div className="chat-message-recipient">
				<p>{props.message.message.text}</p>
				<p className="clip-info-recipient  message-info">
					@{props.message.username} |{new Date(createdAt).toLocaleTimeString()} {new Date(createdAt).toLocaleDateString()}
				</p>
			</div>
		</div>
	);
};

export default ChatMessageRecipient;
