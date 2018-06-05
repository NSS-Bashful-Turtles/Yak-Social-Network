import React, { Component } from 'react'
import { Content, Box } from 'bloomer';


class Likes extends Component {


    render() {
        return (
            <Content>
                {this.props.likes.map(like => (
                    <Box key={like.id}>
                        <i id={"likeNotifications__"+like.id} className="material-icons pointer">highlight_off</i>
                        <p>{like.user.name.first} liked:</p>
                        <small>{like.post.content}</small>
                    </Box>
                ))}
            </Content>
        )
    }
}

export default Likes
