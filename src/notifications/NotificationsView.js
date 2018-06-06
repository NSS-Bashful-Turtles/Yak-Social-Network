import React, { Component } from 'react'
import { Content, Title } from 'bloomer';
import Likes from './Likes';
import Events from './Events';
import FriendRequests from './FriendRequests';


class NotificationsView extends Component {


    render() {
        return (
            <Content>
                <Title>Notifications</Title>
                <h4>Likes</h4>
                <Likes
                    likes={this.props.likes}
                />
                <h4>Events</h4>
                <Events 
                    events={this.props.events}
                />
                <h4>Friend Requests</h4>
                <FriendRequests 
                    friendRequests={this.props.friendRequests}
                />
            </Content>
        )
    }
}

export default NotificationsView
