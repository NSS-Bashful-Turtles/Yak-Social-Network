import React, { Component } from 'react'
import { Title, Container } from 'bloomer'


class PeopleResults extends Component {

    state = {
        results: []
    }

    componentDidMount() {
        fetch(`http://localhost:8088/users?q=${this.props.searchString}`)
            .then(r => r.json())

            .then(response => {
                this.setState({
                    results: response
                })
            })
    }

    render() {
        return (
            <Container>
                {this.state.results.map(user => (
                    <Title key={user.id}>{user.name.first} {user.name.last}</Title>
                ))}
            </Container>
        )
    }
}

export default PeopleResults
