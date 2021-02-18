import React from 'react';
import '../aron.css';

export const ErrorMessage = (props) => {
  return (
    <div className={props.class}>
      <ul>
        <li>{props.message}</li>
      </ul>
    </div>
  );
};

export default ErrorMessage;
