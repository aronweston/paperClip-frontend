import React, { Component } from 'react';
import { ROOT, HEADERS, MESSAGES } from '../auth/serverData';
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
      axios.get(MESSAGES).then((response) => {
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

    if (this.state.data.text === '') {
      console.log('type something you numpty');
      return null;
    }

    axios({
      method: 'POST',
      url: `${ROOT}/messages`,
      headers: HEADERS,
      data: this.state.data,
    }).catch((err) => console.log(err));

    //Clear the form input post send
    this.setState({
      data: {
        text: '',
        user_id: this.props.user.id,
        chat_id: 1,
      },
    });
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

  handleKeyPress = (e) => {
    if (e.which === 13 && !e.shiftKey) {
      this._handleChatSend(e);
    }
  };

  render() {
    return (
      <>
        <div className='chat-messages-container'>
          <div className='content'>
            {this.state.set && (
              <MessagesArea
                messages={this.state.messages}
                user={this.props.user}
              />
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
              value={this.state.data.text}
              onKeyPress={this.handleKeyPress}
              autoFocus
            />
            <SendButton />
          </form>
          <JumpOutButton
            onClick={() => {
              this.props.handleLogout();
            }}
          />
        </div>
      </>
    );
  }
}

export default Chat;
