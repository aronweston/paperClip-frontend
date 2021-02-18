import React from 'react';
import '../aron.css';

const RegErrorMessage = (props) => {
  console.log(props);

  props.error.forEach((error) => {
    return <div className={props.class}>{error}</div>;
  });
};

export default RegErrorMessage;
