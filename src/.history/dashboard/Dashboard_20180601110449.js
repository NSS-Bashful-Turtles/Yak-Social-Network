import React, { Component } from 'react'
import { Container, Section, Title } from 'bloomer'
import NewsFeed from '../newsfeed/newsfeed';


class Dashboard extends Component {


    render() {
        return (
            <Container>
                <Title>Dashboard</Title>
                <NewsFeed />
            </Container>
        )
    }
}

export default Dashboard
