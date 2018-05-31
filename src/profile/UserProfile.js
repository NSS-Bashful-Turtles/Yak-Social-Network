import React, { Component } from 'react'
import { Hero, Container, HeroBody, Title, Box } from 'bloomer';
import './Profile.css'
import Posts from '../newsfeed/posts';


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
            image: "https://placeimg.com/200/200/people",
            recentPosts: []
        }
    }

    // on component mount, request userid by the property userId
    componentDidMount() {
        fetch(`http://localhost:8088/users/${this.props.userId}`)

            .then(r => r.json())

            //set properties that are provided by the user request
            .then(response => {
                this.setState({
                    userId: response.userId,
                    name: response.name,
                    email: response.email,
                    location: response.location,
                    image: response.image
                })
            })

        //fetch the 5 most recent posts by the user and update the response array in the component state
        fetch(`http://localhost:8088/posts?userId=${this.props.userId}&_limit=5`)
            .then(r => r.json())
            .then(response => {
                this.setState({
                    recentPosts: response
                })
            })


    }

    // render the component based on information in the state
    render() {
        return (
            <div>
                <Hero>
                    <HeroBody>
                        <Container>
                            <img className="is-pulled-left" src={this.state.image}/>
                            <Title>Name: {this.state.name.first} {this.state.name.last}</Title>
                            <p>Location: {this.state.location}</p>
                        </Container>
                    </HeroBody>
                </Hero>
                <Box>
                    <Title>Recent Posts</Title>
                {this.state.recentPosts.map(p => (
                    <Posts image={p.image} content={p.content} key={p.id}/>
                ))}
                </Box>
            </div>
        )
    }
}

export default UserProfile
