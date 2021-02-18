import React from "react";
import ChatMessageUser from "./ChatMessageUser";
import ChatMessageRecipient from "./ChatMessageRecipient";

const MessagesArea = (props) => {
	const { messages, user, fetchClips } = props;

	const mapMessages = () => {
		return messages.map((messageObj) => {
			if (messageObj.message.user_id === user.id) {
				return <ChatMessageUser message={messageObj} user={user} fetchClips={fetchClips} />;
			} else {
				return <ChatMessageRecipient message={messageObj} user={user} fetchClips={fetchClips} />;
			}
		});
	};

	return <div className="messagesArea">{mapMessages()}</div>;
};

export default MessagesArea;
