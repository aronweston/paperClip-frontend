import React, { useState, useEffect } from 'react';
import { LOGOUT, LOGGED_IN } from '../auth/serverData';
import Platform from '../Home/Platform';
import axios from 'axios';

export const Home = (props) => {
  const [user, setUser] = useState({});

  const getUserData = () => {
    axios
      .get(LOGGED_IN, { withCredentials: true })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((err) => {
        console.log(err);
        props.history.push('/landing');
      });
  };

  //   const handleLogoutClick = () => {
  //     axios
  //       .delete(LOGOUT, { withCredentials: true })
  //       .then(props.handleLogout)
  //       .catch((error) => {
  //         console.log('logout error', error);
  //       });
  //   };

  useEffect(() => {
    getUserData();
    // setTimeout(() => {
    //   if (!props.user) props.history.push('/landing');
    // }, 2000);
  }, []);

  return (
    <>
      <div className='platform-container'>
        <Platform
          {...props}
          login={props.login}
          user={props.user}
          handleLogout={props.handleLogout}
        />
      </div>
    </>
  );
};
export default Home;
