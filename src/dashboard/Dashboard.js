import React, { Component } from 'react'
import { Container, Section, Title } from 'bloomer'
import NewsFeed from '../newsfeed/newsfeed';
import FriendList from '../friends/FriendList'
import Calendar from '../calendar/Calendar'
import AddList from '../ads/AddList';

class Dashboard extends Component {


    render() {
        return (
            <Container>
                <Title>Dashboard</Title>
                <NewsFeed />
                <FriendList />
                <Calendar />
                <AddList />
            </Container>
        )
    }
}

export default Dashboard
