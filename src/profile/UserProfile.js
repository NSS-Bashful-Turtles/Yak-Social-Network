import React, { Component } from 'react'


class UserProfile extends Component {
    // set default data for the component
    // if xhr request does not complete the default information will let you know
    constructor(props) {
        super(props)
        console.log(this.props.match.params.userId)

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

    // on component mount, request userid by the property userId
    componentDidMount() {
        fetch(`http://localhost:8088/users/${this.props.match.params.userId}`)
        .then(r => r.json())

        .then(response => {
            this.setState(response)
        })
    }

    // render the component based on information in the state
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
