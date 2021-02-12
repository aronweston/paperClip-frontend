import React, { Component } from 'react'
import SidePanel from './SidePanel'
import ChatPanel from './ChatPanel'

export class Main extends Component {
    render() {
        return (
            <div>
                <SidePanel />
                <ChatPanel />
            </div>
        )
    }
}

export default Main
