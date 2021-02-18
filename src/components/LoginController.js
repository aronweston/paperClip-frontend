import React from 'react';

const LoginController = (props) => {
  if (props && props.login === undefined) {
    return null;
  } else {
    if (props.login === 'LOGGED_IN') {
      //only show the login profile
      return (
        <div>
          <a id='profile-image' href='/profile'>
            {props.user.username.charAt(0)}
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
