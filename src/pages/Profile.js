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
    this.state = {};
    this.showUpdate = this.showUpdate.bind(this);
  }

  showUpdate() {
    return <ProfileUpdate />;
  }

  render() {
    return (
      <div className='login-signup-container'>
        <ProfileInfo user={this.props.user} onClick={this.showUpdate} />
      </div>
    );
  }
}

export default Profile;
