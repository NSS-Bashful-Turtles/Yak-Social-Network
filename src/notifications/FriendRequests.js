import React, { Component } from 'react'
import { Button, Content, Box } from 'bloomer';


class FriendRequests extends Component {


    render() {
        return (
            <Content>
                {this.props.friendRequests.map(request => (
                    <Box key={request.id}>
                        <p>{request.user.name.first} has sent you a friend request</p>
                        <Button disabled="true">Accept</Button>
                        <Button disabled="true">Deny</Button>
                    </Box>
                ))}
            </Content>
        )
    }
}

export default FriendRequests
