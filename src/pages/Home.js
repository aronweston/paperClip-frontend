import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Platform from '../home/Platform';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    console.log(props);
    this.SERVER_URL = 'http://localhost:3000/logout';
  }

  handleLogoutClick = () => {
    axios
      .delete(this.SERVER_URL, { withCredentials: true })
      .then(this.props.handleLogout)
      .catch((error) => {
        console.log('logout error', error);
      });
  };

  // if (this.props.loggedInStatus === 'NOT_LOGGED_IN') {
  // return <Redirect to='/login' />;

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
