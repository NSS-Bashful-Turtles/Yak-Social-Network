import React, { Component } from 'react'


class UserProfile extends Component {

    state = {
        userId: "FakerUserName",
        Name: {
            first: "Faker",
            last: "McFake",
        },
        Email: "fake@fakesite.fake",
        Location: "no where",
        image: "https://placeimg.com/200/200/people"
    }

    

    render() {
        return (
            <div>
                <img src={this.state.image} alt="profile"/>
                <h2>Name: {this.state.Name.first} {this.state.Name.last}</h2>
                <p>Location: {this.state.Location}</p>
            </div>
        )
    }
}

export default UserProfile
