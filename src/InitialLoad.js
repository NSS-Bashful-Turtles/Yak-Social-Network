import React, { Component } from "react";
import LoginPage from './LoginRegistration/loginRegistrationPage'
import NavBar from './nav/NavBar'
import ProfileView from './profile/ProfileView'
import Dashboard from './dashboard/Dashboard';
import { Route, Link } from "react-router-dom";
import Search from "./search/Search";

class InitialLoad extends Component {
    
    state = {
        isAuth: false,
        userId: ''
    }

    checkAuth = function() {
        let userId = ''
        
        if(JSON.parse(sessionStorage.getItem("userId")) !== null){
            // debugger
            userId = JSON.parse(sessionStorage.getItem("userId"))
            this.state.isAuth = true
            this.state.userId = userId
        }


        let storedId = ''
        if(JSON.parse(localStorage.getItem("userId")) !== null){
            const storedId = localStorage.getItem("userId")
            sessionStorage.setItem("userId", storedId)
            this.userId = storedId
        }


    }.bind(this)

    render() {
        this.checkAuth()
        if (this.state.isAuth === false) {
            return (
                <div>
                    <LoginPage />
                </div>
            )
        } else {
            return(
                <div>
                    <NavBar />
                    <Route path="/profile/:userId" component={ProfileView} />
                    <Route path="/home/:userId" component={Dashboard} />
                    <Route path="/search/:searchType/:searchValue" component={Search} />
                </div>
            )
        }
    }
}

export default InitialLoad