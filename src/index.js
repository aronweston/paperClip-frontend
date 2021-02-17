import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './app.css';
import { ActionCableProvider } from 'react-actioncable-provider';

import ActionCable from 'actioncable';
const cable = ActionCable.createConsumer('ws://localhost:3000/cable');

ReactDOM.render(
  <ActionCableProvider cable={cable}>
    <App />
  </ActionCableProvider>,
  document.getElementById('root')
);
