import React, { Component } from 'react';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';

class Platform extends Component {
  render() {
    return (
      <>
        <SidePanel />
        <MainPanel user={this.props.user} />
      </>
    );
  }
}

export default Platform;
