import React, { Component } from 'react';
import Friend from "./friend"

class FriendList extends Component {

    state = { friends: [] }

    componentDidMount() {
        fetch(`http://localhost:8088/friendships?user1Id=1&?user2id=1`)
            // Must be explicit on how to parse the response
            .then(response => response.json())

            // JSON parsed data comes to this then()
            .then(apiFriends => {
                fetch('http://localhost:8088/users')
                .then(response => response.json())
                .then(users => {
                    let friendUser = []
                    users.forEach( user => {
                        apiFriends.forEach( friend =>{
                            if (friend.user2Id === user.id){
                                friendUser.push(user)
                            }
                        })
                    })
                    this.setState({
                        friends:friendUser
                    })
                })
            })

    }

    render() {
        return (
            <div>
                <strong>Friends List</strong>
                    {this.state.friends.map(p => (<Friend first={p.name.first} last= {p.name.last}/>))}
            </div>
        )
    }
}

export default FriendList