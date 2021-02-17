import React from 'react';
import CreateClip from '../Clips/CreateClip';

const ChatMessageRecipient = (props) => {
  const createdAt = props.message.message.created_at;
  return (
    <div className='chat-row-recipient'>
      <CreateClip />
      <div className='chat-message-recipient'>
        <p>{props.message.message.text}</p>
        <p>
          {new Date(createdAt).toLocaleTimeString()}{' '}
          {new Date(createdAt).toLocaleDateString()}
        </p>
        <p>{props.message.username}</p>
      </div>
    </div>
  );
};

export default ChatMessageRecipient;
