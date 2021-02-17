<<<<<<< HEAD
import React, { Component } from "react";
import Platform from "../Home/Platform";
=======
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Platform from '../home/Platform';
import axios from 'axios';
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d

class Home extends Component {
  constructor(props) {
    super(props);
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

  render() {
<<<<<<< HEAD
    return (
      <>
        <h2>Status: {this.props.loggedInStatus}</h2>
        <div className="platform-container">
          <Platform />
        </div>
      </>
    );
=======
    if (this.props.loggedInStatus === 'NOT_LOGGED_IN') {
      return <Redirect to='/login' />;
    } else {
      return (
        <>
          <h2>Status: {this.props.loggedInStatus}</h2>
          <button
            className='btn btn-primary'
            onClick={() => this.handleLogoutClick()}>
            Logout
          </button>
          <div className='platform-container'>
            <Platform />
          </div>
        </>
      );
    }
>>>>>>> 73c02f636d03a9300c0088046b29a7767fad303d
  }
}

export default Home;
