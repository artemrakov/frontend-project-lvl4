// @ts-check
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

import App from './App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

console.log('it works!');
console.log('gon', gon);

ReactDOM.render(<App channels={gon.channels} currentChannelId={gon.currentChannelId} />, document.getElementById('chat'));
