import React from 'react';
import '../aron.css';

export const ErrorMessage = (props) => {
  <div className={props.class}>
    <ul>
      {props.message.forEach((message) => {
        <li key={message}>{message}</li>;
      })}
    </ul>
  </div>;
};

export default ErrorMessage;
