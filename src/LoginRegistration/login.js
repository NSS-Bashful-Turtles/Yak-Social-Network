import React, { Component } from 'react';
import NavBar from '.././nav/NavBar'
import ProfileView from '.././profile/ProfileView'
import Dashboard from '.././dashboard/Dashboard';
// import { Route, Link, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import InitialLoad from '../InitialLoad'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Login extends Component {
    state = {
        username: "",
        password: "",
        errorMessage: "Username or Password does not match",
        loggedIn: false
    }

    handleSubmit = function (evt) {
        evt.preventDefault()

        const thisUser = {
            username: this.state.username,
            password: this.state.password
        }

        fetch(`http://localhost:8088/users?username=${this.state.username}`)
            .then(r => r.json())

            .then(users => {
                const user = users[0]
                console.log(user)
                if (user === undefined || user.password !== this.state.password) {
                    alert(this.state.errorMessage)
                } else if (this.state.password === user.password) {
                    const remember = document.getElementById("checkbox")
                    console.log(remember)
                    if (remember.checked === true) {
                        localStorage.setItem("userId", user.id)
                    } else {
                        localStorage.clear()
                    }
                    sessionStorage.setItem("userId", user.id)

                    ReactDOM.render(
                        <Router>
                            <div>
                                <InitialLoad />
                            </div>
                        </Router>
                    , document.getElementById('root'));
                }
            })

    }.bind(this)

    handleFormFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    render() {
        // if(this.state.loggedIn === false){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            id='username'
                            value={this.state.username}
                            onChange={this.handleFormFieldChange}
                            // className="form-control"
                            placeholder='username' />
                        <input type="text"
                            id='password'
                            value={this.state.password}
                            onChange={this.handleFormFieldChange}
                            // className="form-control"
                            placeholder='password' />
                        <input type="checkbox"
                            id="checkbox"
                            value="true"/>
                        <label for="checkbox">Remember Me?</label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )
        // } else{
        //     return(
        //         <div>
        //             <NavBar />
        //             <Route path="/profile/:userId" component={ProfileView} />
        //             <Route path="/home/:userId" component={Dashboard} />
        //         </div>
        //     )
        // }
    }
}

export default Login