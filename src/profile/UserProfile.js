import React, { Component } from 'react'
import { Hero, Container, HeroBody } from 'bloomer';



class UserProfile extends Component {
    // set default data for the component
    // if xhr request does not complete the default information will let you know
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

    // on component mount, request userid by the property userId
    componentDidMount() {
        fetch(`http://localhost:8088/users/${this.props.userId}`)
            .then(r => r.json())

            .then(response => {
                this.setState(response)

                //set background image of hero element
                const hero = document.querySelector(".hero")

                hero.style.backgroundImage = `url(${this.state.image})`
            })
    }

    // render the component based on information in the state
    render() {
        return (
            <Hero >
                <HeroBody>
                    <Container>
                        <h2>Name: {this.state.name.first} {this.state.name.last}</h2>
                        <p>Location: {this.state.location}</p>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default UserProfile
