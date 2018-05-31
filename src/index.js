import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserProfile from './profile/ProfileView';
import NavBar from './nav/NavBar';
import NewsFeed from './newsfeed/newsfeed'
import ProfileHeader from './profile/ProfileHeader'
import FriendList from './friends/FriendList'
import Login from './LoginRegistration/login'
import './index.css';





ReactDOM.render(
 <Router>
    <div>
        <NavBar/>
        <Route path="/profile/:userId" component={UserProfile}/>
    </div>
</Router>
    , document.getElementById('root'));
registerServiceWorker();
