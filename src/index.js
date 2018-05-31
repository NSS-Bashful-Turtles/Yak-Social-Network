import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './LoginRegistration/login'
import 'bulma/css/bulma.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserProfile from './profile/UserProfile'
import NewsFeed from './newsfeed/newsfeed'
import LoginPage from './LoginRegistration/loginRegistrationPage'


ReactDOM.render(<LoginPage />, document.getElementById('root'));
// ReactDOM.render(<NewsFeed/>, document.getElementById('root'));
registerServiceWorker();
