import React, { Component } from "react";
import ChatMessageUser from "./Chat/ChatMessageUser";
import ChatMessageRecipient from "./Chat/ChatMessageRecipient";
import ChatInput from "./Chat/ChatInput";
import UserTyping from "./Chat/UserTyping";
import JumpOutButton from "./Chat/JumpOutButton";
import Send from "../assets/send.svg";

export class Chat extends Component {
  constructor() {
    super();
    this.state = {
      endChat: false,
      chatInput: "",
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
    this.setState({ chatInput: "" });
  }

  _handleChatInputChange(e) {
    this.setState({ chatInput: e.target.value });
  }

  render() {
    return (
      <div className="chat">
        <p>Chat</p>
        <ChatMessageRecipient />
        <ChatMessageUser />
        <form id="message-form" onSubmit={this._handleChatSend}>
          <textarea
            className="message-input"
            type="text"
            name="message-input"
            onChange={this._handleChatInputChange}
            placeholder="What's on your mind?"
            value={this.state.chatInput}
          />
          <button className="send-button">
            <img className="send-icon" src={Send} alt="Send Message" />
          </button>
        </form>
        {/*
            <ChatInput /> */}
        <UserTyping />
        <JumpOutButton onClick={this._jumpOut} />
      </div>
    );
  }
}

export default Chat;
