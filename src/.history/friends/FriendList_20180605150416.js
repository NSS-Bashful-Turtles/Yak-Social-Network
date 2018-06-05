import React, { Component } from 'react';
import Friend from "./friend"
import { Container } from 'bloomer';

class FriendList extends Component {
    state = { friends: [] }
    uniqueKey = 1;


    componentDidMount() {
        const userId = sessionStorage.getItem('userId')
        let friendsList = []
        fetch(`http://localhost:8088/friendships?user1Id=${userId}`)
        .then(response => response.json())
        .then(response => {
            //add all user 2 id values to array
            friendsList.push(response.user2Id)
            fetch(`http://localhost:8088/friendships?user2Id=${userId}`)
            .then(user2 => user2.json())

            // JSON parsed data comes to this then()
            .then(apiFriends => {
                //add all user 2 key values to array
                friendsList.push(apiFriends.user1Id)
                fetch('http://localhost:8088/users')// add array of id values to this to return friends
                .then(response => response.json())
                .then(users => {
                    let friendUser = []
                    users.forEach( user => {
                        apiFriends.forEach( friend =>{
                            if (friend.user2Id === user.id || friend.user1Id === user.id ){
                                friendUser.push(user)
                            }
                        })
                    })
                    this.setState({
                        friends:friendUser
                    })
                })
            })
        })
    }

    render() {
        return (
            <Container>
                <strong>Friends List</strong>
                {this.state.friends.map(p => (
                        <Friend
                            first={p.name.first}
                            last= {p.name.last}
                            key={this.uniqueKey++}
                            />
                        )
                    )
                }
            </Container>
        )
    }
}

export default FriendList