import React from 'react';
import ChatMessageUser from './ChatMessageUser';
import ChatMessageRecipient from './ChatMessageRecipient';

const MessagesArea = ({ data, user }) => {
  return (
    <div className='messagesArea'>
      {data.map((message) => (
        <ChatMessageUser message={message.message} />
      ))}
    </div>
  );
};

export default MessagesArea;
