import React, { Component } from 'react';
import Login from './login'
import Registration from './register'

class LoginPage extends Component {
    render() {
        return(
            <div>
                <Login setActiveUser={this.props.setActiveUser} setView={this.props.setView} />
                <Registration setActiveUser={this.props.setActiveUser} setView={this.props.setView} />
            </div>
        )
    }
}

export default LoginPage