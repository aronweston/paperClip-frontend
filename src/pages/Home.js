import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { LOGOUT } from '../auth/serverData';
import Platform from '../Home/Platform';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  handleLogoutClick = () => {
    axios
      .delete(LOGOUT, { withCredentials: true })
      .then(this.props.handleLogout)
      .catch((error) => {
        console.log('logout error', error);
      });
  };

  render() {
    return (
      <>
        <div className='platform-container'>
          <Platform
            login={this.props.login}
            user={this.props.user}
            handleLogout={this.props.handleLogout}
          />
        </div>
      </>
    );
  }
}
export default Home;
