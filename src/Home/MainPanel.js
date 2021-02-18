import React, { Component } from 'react';
import Chat from './Chat';
import Clips from './Clips';
import Search from './Search';

class MainPanel extends Component {
  render() {
    return (
      <div className='main-panel-container'>
        <Chat user={this.props.user} handleLogout={this.props.handleLogout} />
        {/*<Clips />*/}
        {/*<Search />*/}
      </div>
    );
  }
}

export default MainPanel;
