import React, { Component } from 'react'
import OnlineUsers from './OnlineUsers'
import Profile from './Profile'

class SidePanel extends Component {

  render() {
      return (
          <div className="side-panel-container">
          <p>Side Panel</p>
          <Profile />
          <OnlineUsers />
          </div>
      )
  }


}

export default SidePanel
