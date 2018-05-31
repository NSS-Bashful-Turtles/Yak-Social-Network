import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserProfile from './profile/UserProfile'
import FriendList from './friends/FriendList'

ReactDOM.render(<FriendList/>, document.getElementById('root'));
registerServiceWorker();
