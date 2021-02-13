import React, { Component } from 'react'
import ChatMessage from './Chat/ChatMessage'
import ChatInput from './Chat/ChatInput'
import JumpOutButton from './Chat/JumpOutButton'

export class Chat extends Component {
    render() {
        return (
            <div>
                <p> Chat</p>
                <div className="temp">
                    <ChatMessage />
                    <ChatInput />
                    <JumpOutButton />
                </div>
               
            </div>
        )
    }
}

export default Chat
