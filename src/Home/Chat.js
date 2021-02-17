import React, { Component } from 'react';
import MessagesArea from '../components/liveChat/MessagesArea';
import ChatInput from './Chat/ChatInput';
import JumpOutButton from './Chat/JumpOutButton';
import SendButton from './Chat/SendButton';

export class Chat extends Component {
  constructor() {
    super();
    this.state = {
      endChat: false,
      chatInput: '',
      messages: [],
      set: false,
    };
    this._jumpOut = this._jumpOut.bind(this);
    this._handleChatInputChange = this._handleChatInputChange.bind(this);
    this._handleChatSend = this._handleChatSend.bind(this);
  }

  _jumpOut() {
    this.setState({ count: true });
    console.log(this.state.count);
  }

  _handleChatSend(e) {
    e.preventDefault();
    console.log(this.state.chatInput);
    this.setState({ chatInput: '' });
  }

  _handleChatInputChange(e) {
    this.setState({ chatInput: e.target.value });
  }

  render() {
    return (
      <>
        <div className='chat-messages-container'>
          <div className='content'>{/* <MessagesArea /> */}</div>
        </div>
        <div className='chat-absolute-container'>
          <form id='message-form' onSubmit={this._handleChatSend}>
            <textarea
              className='message-input'
              type='text'
              name='message-input'
              onChange={this._handleChatInputChange}
              placeholder="What's on your mind?"
              value={this.state.chatInput}
            />
            <SendButton />
          </form>
          {/* <ChatInput /> */}
          <JumpOutButton onClick={this._jumpOut} />
        </div>
      </>
    );
  }
}

export default Chat;
