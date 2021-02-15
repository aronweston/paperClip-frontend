import React from 'react';
import CreateClip from '../Clips/CreateClip'

const ChatMessageUser = () => {
    return (
        <div className="chat-row-user">
          <div className="chat-message-user">
            <p>Jeff Bezos could Venmo me $5 and still be a billionaire. Let that sink in.</p>
          </div>
          <CreateClip />
        </div>
    );
}

export default ChatMessageUser;
