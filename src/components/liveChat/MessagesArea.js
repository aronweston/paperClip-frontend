import React from 'react';

const MessagesArea = (props) => {
  return (
    <div className='messagesArea'>
      {props.messages.map((message) => (
        <p>{message.text}</p>
      ))}
    </div>
  );
};

export default MessagesArea;
