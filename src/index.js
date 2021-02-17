import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './app.css';
// import { ActionCableProvider } from 'react-actioncable-provider';

// import ActionCable from 'actioncable';
// const cable = ActionCable.createConsumer('ws://localhost:3000/cable');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <ActionCableProvider cable={cable}>

  // </ActionCableProvider>,
  document.getElementById('root')
);
