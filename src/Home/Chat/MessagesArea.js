import React from 'react';
// import ChatMessageUser from './Chat/ChatMessageUser';
// import ChatMessageRecipient from './Chat/ChatMessageRecipient';

const MessagesArea = (props) => {
  // console.log(props);
  return (
    <div className='messagesArea'>
      {props.messages.map((message) => (
        <p>{message.text}</p>
      ))}
    </div>
  );
};

export default MessagesArea;
