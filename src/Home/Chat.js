import React, { Component } from 'react';
import { API_ROOT, HEADERS, SERVER_URL } from '../auth/serverData';
import JumpOutButton from './Chat/JumpOutButton';
import MessagesArea from './Chat/MessagesArea';
import SendButton from './Chat/SendButton';
import axios from 'axios';

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        chat_id: 0,
        user_id: 0,
        text: '',
      },
      messages: [],
      set: false,
    };

    const fetchMessages = () => {
      axios.get(SERVER_URL).then((response) => {
        this.setState({ messages: response.data });
        this.setState({ set: true });
        setTimeout(fetchMessages, 500);
      });
    };
    fetchMessages();

    this._handleChatInputChange = this._handleChatInputChange.bind(this);
    this._handleChatSend = this._handleChatSend.bind(this);
  }

  _handleChatSend(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${API_ROOT}/messages`,
      headers: HEADERS,
      data: this.state.data,
    }).catch((err) => console.log(err));
  }

  _handleChatInputChange(e) {
    this.setState({
      data: {
        text: e.target.value,
        user_id: this.props.user.id,
        chat_id: 1,
      },
    });
  }

  render() {
    return (
      <>
        <div className='chat-messages-container'>
          <div className='content'>
            {this.state.set && (
              <MessagesArea data={this.state.messages} user={this.props.user} />
            )}
          </div>
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
          <JumpOutButton
            onClick={() => {
              console.log('add logout to me');
            }}
          />
        </div>
      </>
    );
  }
}

export default Chat;
