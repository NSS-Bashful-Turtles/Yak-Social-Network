import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserProfile from './profile/UserProfile'

ReactDOM.render(<UserProfile />, document.getElementById('root'));
registerServiceWorker();
