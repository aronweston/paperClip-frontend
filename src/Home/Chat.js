import React, { Component } from 'react'
import ChatMessage from './Chat/ChatMessage'
import ChatInput from './Chat/ChatInput'
import JumpOutButton from './Chat/JumpOutButton'

export class Chat extends Component {
    constructor() {
        super()
        this.state = {
            endChat: false,
            chatInput: ''
        }
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
        this.setState({chatInput: ''})
    } 

    _handleChatInputChange(e) {
        this.setState({chatInput: e.target.value})
    }


    render() {
        return (
            <div>
                <p> Chat </p>
               
                <form onSubmit={this._handleChatSend}>
                    <label htmlFor="message-input">
                        <input type="text" name="message-input" onChange={this._handleChatInputChange} placeholder="What's on your mind?" value={this.state.chatInput} />
                    </label>
                    <button className="btn">Send Chat</button>
                </form>
                 <ChatMessage />
                <ChatInput />
                <JumpOutButton onClick={this._jumpOut} />
            </div>
        )
    }
}

export default Chat
