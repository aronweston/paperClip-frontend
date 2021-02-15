import React, { Component } from 'react';

export const LoginController = (props) => {
  if (props && props.login === undefined) {
    return null;
  } else {
    if (props.login === 'LOGGED_IN') {
      //only show the login profile
      return (
        <div>
          <a href='/profile'>
            <img id='profile-image' src={props.user.profile_photo} alt='' />
          </a>
        </div>
      );
    } else {
      //login button
      return (
        <a className='btn btn-primary' href='/login'>
          Login
        </a>
      );
    }
  }
};

export default LoginController;
