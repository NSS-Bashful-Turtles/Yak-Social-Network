import React, { Component } from 'react'
import { Container, Title } from 'bloomer'
import Posts from '../newsfeed/Posts'
import Event from '../calendar/Event'


class AllResults extends Component {

    state = {
        people: [],
        posts: [],
        events: []
    }

    runSearch = function() {
        fetch(`http://localhost:8088/posts?q=${this.props.searchString}&private=false&_expand=user`)
            .then(r => r.json())
            .then(response => {
                this.setState({
                    posts: response
                })
                return fetch(`http://localhost:8088/users?q=${this.props.searchString}`)
            })
            .then(r => r.json())
            .then(response => {
                this.setState({
                    people: response
                })
                return fetch(`http://localhost:8088/events?q=${this.props.searchString}`)
            })
            .then(r => r.json())
            .then(response => {
                this.setState({
                    events: response
                })
            })
    }

    // fetch the collections for each search type based on search string
    // and set state of related array
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
                <Title>Users</Title>
                {this.state.people.map(user => <Title key={user.id}>{user.name.first} {user.name.last}</Title>)}
                <Title>Posts</Title>
                {this.state.posts.map(post => <Posts userImage={post.user.Image} firstName={post.user.name.first} lastName={post.user.name.last} timeStamp={post.timeStamp} image={post.image} content={post.content} key={post.id} />)}
                <Title>Events</Title>
                {this.state.events.map(event => <Event name={event.name} date={event.date} startTime={event.startTime} key={event.id} />)}
            </Container>
        )
    }
}

export default AllResults
