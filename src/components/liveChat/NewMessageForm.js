import React, { Component } from 'react';
import { API_ROOT, HEADERS, SERVER_URL } from '../../constants';
import axios from 'axios';

class NewMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      chat_id: null,
      user_id: null,
      user_name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    this.setState({ chat_id: 1 });
    this.setState({ user_id: 1 });
    this.setState({ user_name: 'Jim' });
  }

  handleSubmit(e) {
    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state),
    });
    this.setState({ text: '' });
    e.preventDefault();
  }

  render() {
    return (
      <div className='newMessageForm'>
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default NewMessageForm;
