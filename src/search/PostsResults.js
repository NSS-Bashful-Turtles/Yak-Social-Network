import React, { Component } from 'react'
import Posts from '../newsfeed/Posts'
import { Container } from 'bloomer/lib/layout/Container';


class PostsResults extends Component {

    state = {
        results: []
    }

    runSearch = function() {
        fetch(`http://localhost:8088/posts?q=${this.props.searchString}&private=false&_expand=user`)
            .then(r => r.json())

            .then(response => {
                this.setState({
                    results: response
                })
            })
    }

    componentDidMount() {
        this.runSearch()
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.runSearch()
        }
    }



    render() {
        return (
            <Container>
                {this.state.results.map(post => (
                    <Posts
                        userImage={post.user.Image}
                        firstName={post.user.name.first}
                        lastName={post.user.name.last}
                        timeStamp={post.timeStamp}
                        image={post.image}
                        content={post.content}
                        key={post.id}
                    />
                ))}
            </Container>
        )
    }
}

export default PostsResults
