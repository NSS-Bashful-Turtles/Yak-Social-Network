import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserProfile from './profile/UserProfile'

ReactDOM.render(<UserProfile userId="1"/>, document.getElementById('root'));
registerServiceWorker();
