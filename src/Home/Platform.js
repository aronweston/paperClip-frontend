import React, { Component } from 'react';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';

class Platform extends Component {
  render() {
    return (
      <>
        <SidePanel
          login={this.props.login}
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <MainPanel
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
      </>
    );
  }
}

export default Platform;
