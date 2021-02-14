import React, { Component } from 'react'
import Clip from './Clips/Clip'
import RemoveClip from './Clips/RemoveClip'
import CreateClip from './Clips/CreateClip'
import CreateChat from './Chat/CreateChat'

export class Clips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: true
        }
    }

    render() {
        return (
            <div>
                <p>Clips</p>
                <div className="clip">
                    <Clip />
                    <div className="clip-button-controls">
                        {this.state.user ?
                            <RemoveClip />
                            :
                            <CreateClip />
                        }
                        <CreateChat />
                    </div>
                </div>
            </div>
        )
    }
}

export default Clips
