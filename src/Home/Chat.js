import React, { Component } from 'react'
import ChatMessage from './Chat/ChatMessage'
import ChatInput from './Chat/ChatInput'
import JumpOutButton from './Chat/JumpOutButton'

export class Chat extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this._jumpOut = this._jumpOut.bind(this);
    }

    _jumpOut() {
        this.setState({ count: this.count + 1 });
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <p> Chat</p>
                <div className="temp">
                    <ChatMessage />
                    <ChatInput />
                    <JumpOutButton onClick={this._jumpOut} />
                </div>
               
            </div>
        )
    }
}

export default Chat
