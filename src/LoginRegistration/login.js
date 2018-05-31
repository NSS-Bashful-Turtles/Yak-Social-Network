import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: "",
        password: "",
        errorMessage: "Username or Password does not match"
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
                }
            })

    }.bind(this)

    handleFormFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    render() {
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
    }
}

export default Login