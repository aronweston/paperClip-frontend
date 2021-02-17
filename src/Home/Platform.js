import React, { Component } from 'react';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';

class Platform extends Component {
<<<<<<< HEAD
    render() {
        return (
            <>
            <SidePanel
              login={this.props.login}
              user={this.props.user}
              handleLogout={this.props.handleLogout}
            />
              <MainPanel />
            </>
        )
    }
=======
  render() {
    return (
      <>
        <SidePanel />
        <MainPanel user={this.props.user} />
      </>
    );
  }
>>>>>>> 3c91d8dd858f0dcc3698517a238e656848719397
}

export default Platform;
