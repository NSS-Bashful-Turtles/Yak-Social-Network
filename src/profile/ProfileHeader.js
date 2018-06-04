import React, { Component } from 'react'
import { Hero, HeroBody, Container, Title } from 'bloomer';


class ProfileHeader extends Component {
    render() {
        return (
            <Hero>
                <HeroBody>
                    <Container>
                        <img className="is-pulled-left" src={this.props.image} alt="" />
                        <Title>Name: {this.props.first} {this.props.last}</Title>
                        <p>Location: {this.props.location}</p>
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}

export default ProfileHeader
