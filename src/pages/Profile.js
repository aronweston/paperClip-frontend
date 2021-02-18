import React, { Component } from 'react';
import axios from 'axios';
import ProfileInfo from '../Home/ProfileInfo';
import ProfileUpdate from '../auth/ProfileUpdate';

import '../app.css';
import '../aron.css';
import '../zoha.css';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
    this.showUpdate = this.showUpdate.bind(this);
  }

  showUpdate() {
    this.setState({ update: true });
  }

  render() {
    return (
      <div className='login-signup-container'>
        {this.state.update ? (
          <ProfileUpdate user={this.props.user} />
        ) : (
          <ProfileInfo user={this.props.user} onClick={this.showUpdate} />
        )}
      </div>
    );
  }
}

export default Profile;
