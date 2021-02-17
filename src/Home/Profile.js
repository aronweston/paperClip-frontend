import React, { Component } from 'react';
import ProfileInfo from './Profile/ProfileInfo';


const Profile = (props) => {

      return (
        <div className="side-panel-top-container">
          <h2>Your profile</h2>
            <p class='bio' >@{ props.user.username }</p>
            <p class='bio' >{ props.user.first_name } { props.user.last_name }</p>
        </div>
      );
    };



export default Profile;
