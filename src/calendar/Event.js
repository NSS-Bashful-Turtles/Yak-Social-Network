import React, { Component } from 'react'
import { Title, Section } from 'bloomer';


class Event extends Component {


    render() {
        return (
            <Section>
                <Title>{this.props.name}</Title>
                <p>{this.props.date}</p>
                <p>{this.props.startTime}</p>
            </Section>
        )
    }
}

export default Event
