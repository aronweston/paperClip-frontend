import React from 'react';
import CreateClip from '../Clips/CreateClip';

const ChatMessageUser = (props) => {
  return (
    <div className='chat-row-user'>
      <div className='chat-message-user'>
        <p>{props.message.text}</p>
      </div>
      <CreateClip />
    </div>
  );
};

export default ChatMessageUser;
