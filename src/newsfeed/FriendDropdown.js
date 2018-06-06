import React, { Component } from 'react';
import PrivateFriend from "./PrivateFriend"

class FriendDropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {friends: [],
            selected: "default" };
        this.uniqueKey = 1;

    }

    setFriendSelection = function (evt) {
       this.state.friends.forEach(friend => {
           if(friend.name.first + " " + friend.name.last === evt.target.value){
               this.props.callback(friend.id)
           }
       })
    }.bind(this)

    handleChange = function(event) {
        this.setState({selected:event.target.value});
        this.setFriendSelection(event)
      }.bind(this)

    componentDidMount() {
        const userId = this.props.activeUser
        let friendsList = []
        fetch(`http://localhost:8088/friendships?user1Id=${userId}`)
        .then(response => response.json())
        .then(response => {
            //add all user 2 id values to array
            response.forEach( friend => friendsList.push(friend.user2Id))
            fetch(`http://localhost:8088/friendships?user2Id=${userId}`)
            .then(user2 => user2.json())

            // JSON parsed data comes to this then()
            .then(user2 => {
                //add all user 2 key values to array
                user2.forEach( friend => friendsList.push(friend.user1Id))
                const fl = friendsList.map(p => `id=${p}&`).join("")
                fetch(`http://localhost:8088/users?${fl}`)// add array of id values to this to return friends
                .then(response => response.json())
                .then(users => {
                    let friendUser = []
                    users.forEach( friend => friendUser.push(friend))
                    this.setState({
                        friends:friendUser
                    })
                })
            })
        })
    }

    render() {
        return (
            <select value={this.state.selected} onChange={this.handleChange}>
                    <option value="default">Choose a friend</option>
                    {this.state.friends.map(p => (<PrivateFriend first={p.name.first} last= {p.name.last} key={this.uniqueKey++}/>))}
            </select>
        )
    }
}

export default FriendDropdown