import React, { Component } from 'react';

class Registration extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        location: "",
        email: "",
        username: "",
        password: "",
        errorMessage: "You must complete every field"
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

        
        fetch("http://localhost:8088/users")
        .then(r=>r.json())
        .then(users => {

            let emailUniqueCheck = true
            let usernameUniqueCheck = true

            users.forEach(user => {
                if(user.username === newUser.username){
                    usernameUniqueCheck = false
                }
                if (user.email === newUser.email) {
                    emailUniqueCheck = false
                }
            })

            if(
                this.state.firstName === "" ||
                this.state.firstName === "" ||
                this.state.location === "" ||
                this.state.email === "" ||
                this.state.username === "" ||
                this.state.password === ""
            ) {
                alert(this.state.errorMessage)
            }else if(!emailUniqueCheck){
                emailUniqueCheck = true
                alert("Email is already registered")
            }else if(!usernameUniqueCheck){
                usernameUniqueCheck = true
                alert("Username exists")
            }else {

                fetch("http://localhost:8088/users",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                .then(r => r.json())
                .then(user => {
                    sessionStorage.setItem("userId", user.id)
                    localStorage.clear()
                })
            }
        })
    }.bind(this)

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    id='firstName'
                    value={this.state.firstName}
                    onChange={this.handleFormFieldChange}
                    // className="form-control"
                    placeholder='first name' />
                <input type="text"
                    id='lastName'
                    value={this.state.lastName}
                    onChange={this.handleFormFieldChange}
                    // className="form-control"
                    placeholder='last name' />
                <input type="text"
                    id='location'
                    value={this.state.location}
                    onChange={this.handleFormFieldChange}
                    // className="form-control"
                    placeholder='location' />
                <input type="text"
                    id='email'
                    value={this.state.email}
                    onChange={this.handleFormFieldChange}
                    // className="form-control"
                    placeholder='email' />
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
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Registration