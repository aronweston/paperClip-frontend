import React, { Component } from 'react';

const Profile = (props) => {
  return (
    <div className='side-panel-top-container'>
      <h2>your profile</h2>
      <p class='bio'>@{props.user.username}</p>
      <a className='edit-profile btn btn-primary' href='/profile'>
        edit profile
      </a>
    </div>
  );
};

export default Profile;
