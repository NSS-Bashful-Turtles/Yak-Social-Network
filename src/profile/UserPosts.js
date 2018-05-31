import React, { Component } from 'react'
import Posts from '../newsfeed/posts';
import { Box, Title} from 'bloomer'


class UserPosts extends Component {


    render() {
        return (
            <Box>
                <Title>Recent Posts</Title>
                {this.props.recentPosts.map(p => (
                    <Posts image={p.image} content={p.content} key={p.id} />
                ))}
            </Box>
        )
    }
}

export default UserPosts
