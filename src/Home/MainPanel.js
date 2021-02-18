import React, { Component } from 'react';
import Chat from './Chat';

class MainPanel extends Component {
  render() {
    return (
      <div className='main-panel-container'>
        <Chat user={this.props.user} handleLogout={this.props.handleLogout} />
      </div>
    );
  }
}

export default MainPanel;
