import React, { Component } from 'react'
import Event from '../calendar/Event';
import { Container } from 'bloomer';


class EventsResults extends Component {

    state = {
        results: []
    }

    runSearch = function() {
        fetch(`http://localhost:8088/events?q=${this.props.searchString}`)
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
                {this.state.results.map(event => (
                    <Event 
                        name={event.name}
                        date={event.date}
                        startTime={event.startTime}
                        key={event.id}
                    />
                ))}
            </Container>

        )
    }
}

export default EventsResults
