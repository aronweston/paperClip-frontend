import React, { Component } from 'react';
// import { ActionCableConsumer, ActionCable } from 'react-actioncable-provider';
import { API_ROOT, SERVER_URL } from '../../auth/serverData';
import NewMessageForm from './NewMessageForm';
import MessagesArea from './MessagesArea';
import _ from 'underscore';
import axios from 'axios';

class ConversationsList extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      set: false,
    };

    const fetchMessages = () => {
      axios.get(SERVER_URL).then((response) => {
        console.log(response.data);
        this.setState({ messages: response.data });
        this.setState({ set: true });
        setTimeout(fetchMessages, 500);
      });
    };
    fetchMessages();
  }

  // componentDidMount() {
  //   fetch(`${API_ROOT}/conversations`)
  //     .then((res) => res.json())
  //     .then((conversations) => {
  //       const firstConversation = _.findWhere(conversations, { id: 4 });
  //       this.setState({ lobby: firstConversation });
  //       this.setState({ set: true });
  //     });
  // }

  render() {
    const { lobby } = this.state;
    return (
      <div className='conversationsList'>
        {/* <ActionCableConsumer channel={{ channel: 'ConversationsChannel' }} />
        <ActionCableConsumer
          channel={{ channel: 'MessagesChannel' }}
          onReceived={this.handleReceivedMessage}
          key={lobby.id}
        /> */}
        {this.state.set && <MessagesArea messages={this.state.messages} />}
        <NewMessageForm />
      </div>
    );
  }
}

export default ConversationsList;
