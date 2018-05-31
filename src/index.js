import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserProfile from './profile/UserProfile';
import NavBar from './nav/NavBar';
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

/* <UserProfile userId="1"/> */