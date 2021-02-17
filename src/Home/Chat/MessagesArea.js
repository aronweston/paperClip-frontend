import React from 'react';
import ChatMessageUser from './ChatMessageUser';
import ChatMessageRecipient from './ChatMessageRecipient';

const MessagesArea = (props) => {
  const { messages, user } = props;
  return <div className='messagesArea'>{mapMessages(messages, user)}</div>;
};

const mapMessages = (messages, user) => {
  return messages.map((messageObj) => {
    if (messageObj.message.user_id === user.id) {
      return <ChatMessageUser message={messageObj} />;
    } else {
      return <ChatMessageRecipient message={messageObj} />;
    }
  });
};

export default MessagesArea;
