import React, { Component } from 'react'
import ProfileHeader from './ProfileHeader';
import UserPosts from './UserPosts';
import UserProfileInteraction from './UserProfileInteraction';
import OtherProfileButtons from './OtherProfileButtons';

class ProfileView extends Component {
    // set default data for the component
    // if xhr request does not complete the default information will let you know
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            username: "FakerUserName",
            name: {
                first: "if you are",
                last: "seeing this it means",
            },
            email: "fake@fakesite.fake",
            location: "api request did not complete",
            image: "https://placeimg.com/200/200/people",
            recentPosts: [],
            isCurrentUser: false
        }
    }

    // on component mount, request userid by the property userId
    componentDidMount() {
        fetch(`http://localhost:8088/users/${this.props.userId}`)

            .then(r => r.json())

            //set properties that are provided by the user request
            .then(response => {
                this.setState({
                    id: response.id,
                    username: response.username,
                    name: response.name,
                    email: response.email,
                    location: response.location,
                    image: response.image,
                })
                if (this.state.id === sessionStorage.getItem("userId")) {
                    this.setState({
                        isCurrentUser: true
                    })
                } else {
                    this.setState({
                        isCurrentUser: false
                    })
                }
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
                <ProfileHeader
                    image={this.state.image}
                    first={this.state.name.first}
                    last={this.state.name.last}
                    location={this.state.location}
                />


                {/* checks the is current user boolean
                    and if true loads user profile interaction component
                    if false, loads interaction for other users profiles component
                */}

                {this.state.isCurrentUser ? (
                    <UserProfileInteraction />
                ) : (
                    <OtherProfileButtons />
                )}

                <UserPosts
                    recentPosts={this.state.recentPosts}
                />
            </div>
        )
    }
}

export default ProfileView
