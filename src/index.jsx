// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Components imports
import App from './components/app';

// Style imports
import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />, root
  );
}
