import React, { Component } from 'react';

class Registration extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        location: "",
        email: "",
        username: "",
        password: ""
    }

    handleFormFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    handleSubmit = function(evt) {
        evt.preventDefault()

        const newUser = {
            name: {
                first: this.state.firstName,
                last: this.state.lastName
            },
            username: this.state.username,
            email: this.state.email,
            location: this.state.location,
            password: this.state.password,
            image: ""
        }

        fetch()
    }
}