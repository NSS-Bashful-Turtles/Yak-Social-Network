import React, { Component } from 'react';
import Friend from "./friend"

class FriendList extends Component {

    state = { friendships: [] }

    componentDidMount() {
        fetch(`http://localhost:8088/friendships?user1Id=1`)
            // Must be explicit on how to parse the response
            .then(response => response.json())

            // JSON parsed data comes to this then()
            .then(apiFriends => {

                this.setState({
                    friends: apiFriends
                })
            })

    }

    render() {
        return (
            <div>
                {this.state.friends.map( p => <Friend name={p.user1ID} />
                )}
            </div>
        )
    }
}

export default FriendList