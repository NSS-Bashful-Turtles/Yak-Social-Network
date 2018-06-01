import React, { Component } from 'react'
import { Container, Section, Title } from 'bloomer'
import NewsFeed from '../newsfeed/newsfeed';
import FriendList from '../friends/FriendList'

class Dashboard extends Component {


    render() {
        return (
            <Container>
                <Title>Dashboard</Title>
                <NewsFeed />
                <FriendList />
            </Container
        )
    }
}

export default Dashboard
