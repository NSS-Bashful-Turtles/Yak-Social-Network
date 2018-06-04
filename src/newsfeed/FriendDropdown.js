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
        // event.preventDefault()
        this.setState({selected:event.target.value});
        this.setFriendSelection(event)
      }.bind(this)

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
            <select value={this.state.selected} onChange={this.handleChange}>
                    <option value="default">Choose a friend</option>
                    {this.state.friends.map(p => (<PrivateFriend first={p.name.first} last= {p.name.last} key={this.uniqueKey++}/>))}
            </select>
        )
    }
}

export default FriendDropdown