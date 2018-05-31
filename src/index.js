import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ProfileView from './profile/ProfileView'
import NewsFeed from './newsfeed/Newsfeed'


import NavBar from './nav/NavBar';


import ProfileHeader from './profile/ProfileHeader'
import FriendList from './friends/FriendList'
import Login from './LoginRegistration/login'
import './index.css';



// Line 20 & 25: Router stores NavBar which is holding all links for nav
// Line 23: Route was added to dynamically added any profile page upon login


ReactDOM.render(
//   ReactDOM.render(<NewsFeed/>, document.getElementById('root'));
  // ReactDOM.render(<ProfileView userId="1"/>, document.getElementById('root'));
 <Router>
    <div>
        <NavBar/>
        <Route path="/profile/:userId" component={ProfileView}/>
    </div>
</Router>
    , document.getElementById('root'));
registerServiceWorker();
