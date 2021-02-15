import React from 'react';
import CreateClip from '../Clips/CreateClip'

const ChatMessageRecipient = () => {
    return (
        <div className="chat-row-recipient">
          <CreateClip />
          <div className="chat-message-recipient">
            <p>Jeff Bezos could Venmo me $5 and still be a billionaire. Let that sink in.</p>
          </div>
        </div>
    );
}

export default ChatMessageRecipient;
