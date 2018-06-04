import React, { Component } from 'react'
import { Container, Section, Title } from 'bloomer'
import NewsFeed from '../newsfeed/newsfeed';
import FriendList from '../friends/FriendList'
import Calendar from '../calendar/Calendar'

class Dashboard extends Component {


    render() {
        return (
            <Container>
                <Title>Dashboard</Title>
                <NewsFeed />
                <FriendList />
                <Calendar />
            </Container>
        )
    }
}

export default Dashboard
