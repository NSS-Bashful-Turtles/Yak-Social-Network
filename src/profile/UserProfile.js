import React, { Component } from 'react'


class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: "FakerUserName",
            name: {
                first: "if you are",
                last: "seeing this it means",
            },
            email: "fake@fakesite.fake",
            location: "api request did not complete",
            image: "https://placeimg.com/200/200/people"
        }
    }


    componentDidMount() {
        fetch(`http://localhost:8088/users/${this.props.userId}`)
        .then(r => r.json()) 

        .then(response => {
            console.log(response)
            this.setState(response)
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.image} alt="profile"/>
                <h2>Name: {this.state.name.first} {this.state.name.last}</h2>
                <p>Location: {this.state.location}</p>
            </div>
        )
    }
}

export default UserProfile
