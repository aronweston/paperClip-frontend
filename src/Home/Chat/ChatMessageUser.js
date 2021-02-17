import React from 'react';
import CreateClip from '../Clips/CreateClip';

const ChatMessageUser = (props) => {
  const createdAt = props.message.message.created_at;

  return (
    <div className='chat-row-user'>
      <div className='chat-message-user'>
        <p>{props.message.message.text}</p>
        <p>
          {new Date(createdAt).toLocaleTimeString()}{' '}
          {new Date(createdAt).toLocaleDateString()}
        </p>
        <p>{props.message.username}</p>
      </div>
      <CreateClip />
    </div>
  );
};

export default ChatMessageUser;
