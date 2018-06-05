import React, { Component } from 'react';
import { Field, FieldBody, Checkbox, Control, Input, Button } from 'bloomer';
import 'bulma/css/bulma.min.css'

class Login extends Component {
    state = {
        username: "",
        password: "",
        errorMessage: "Username or Password does not match",
    }

    handleSubmit = function (evt) {
        evt.preventDefault()

        fetch(`http://localhost:8088/users?username=${this.state.username}`)
            .then(r => r.json())

            .then(users => {
                const user = users[0]

                if (user === undefined || user.password !== this.state.password) {
                    alert(this.state.errorMessage)

                } else if (this.state.password === user.password) {
                    const remember = document.getElementById("checkbox")

                    if (remember.checked === true) {
                        localStorage.setItem("userId", user.id)
                    } else {
                        localStorage.clear()
                    }

                    sessionStorage.setItem("userId", user.id)

                    this.props.setActiveUser(user.id)
                    this.props.setView("home")
                }
            })
    }.bind(this);

    handleFormFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this);

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <Field isHorizontal>
                    <FieldBody>

                        <Input type="text"
                            id='username'
                            value={this.state.username}
                            onChange={this.handleFormFieldChange}
                            placeholder='username'></Input>

                        <Input type="text"
                            id='password'
                            value={this.state.password}
                            onChange={this.handleFormFieldChange}
                            placeholder='password'></Input>
                    </FieldBody>
                    <Control>
                        <Checkbox id="checkbox">Remember Me</Checkbox>
                        {/* <Label>Remember Me?</Label> */}
                    </Control>

                    <Button type="submit" id="login__button" isColor="info">Submit</Button>
                </Field>
                </form>
            </div>
        )
    }
}

export default Login