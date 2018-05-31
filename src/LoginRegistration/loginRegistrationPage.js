import React, { Component } from 'react';
import Login from './login'
import Registration from './register'

class LoginPage extends Component {
    render() {
        return(
            <div>
                <Login />
                <Registration />
            </div>
        )
    }
}

export default LoginPage