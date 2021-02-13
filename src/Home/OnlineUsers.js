import React, { Component } from 'react'
import User from './OnlineUsers/User'

export class OnlineUsers extends Component {
    render() {
        return (
            <div>
                <p>Online Users</p>
                <div className="temp">
                    <User />
                </div>
            </div>
        )
    }
}

export default OnlineUsers
