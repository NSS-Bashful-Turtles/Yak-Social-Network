import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ProfileView from './profile/ProfileView'
import Dashboard from './dashboard/Dashboard';
import NewsFeed from './newsfeed/newsfeed'


import NavBar from './nav/NavBar';


import ProfileHeader from './profile/ProfileHeader'
import FriendList from './friends/FriendList'
import Login from './LoginRegistration/login'
import './index.css';
import InitialLoad from './InitialLoad'

// Line 20 & 25: Router stores NavBar which is holding all links for nav
// Line 23: Route was added to dynamically added any profile page upon login


ReactDOM.render(
    <Router>
        <div>
            <InitialLoad />
        </div>
    </Router>

//   ReactDOM.render(<NewsFeed/>, document.getElementById('root'));
  // ReactDOM.render(<ProfileView userId="1"/>, document.getElementById('root'));


    , document.getElementById('root'));
registerServiceWorker();
