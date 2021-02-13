import React, { Component } from 'react'
import MainPanel from './MainPanel'
import SidePanel from './SidePanel'

class Platform extends Component {
    render() {
        return (
            <>
              <SidePanel />
              <MainPanel />
            </>
        )
    }
}

export default Platform
