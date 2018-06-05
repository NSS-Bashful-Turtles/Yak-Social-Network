import React, { Component } from 'react'
import { Content, Box } from 'bloomer';


class Events extends Component {


    render() {
        return (
            <Content>
                {this.props.events.map(event => (
                    <Box key={event.id}>
                        <i id={"eventNotifications__"+event.id} className="material-icons pointer">highlight_off</i>
                        <p>{event.user.name.first} created {event.event.name}</p>
                    </Box>
                ))}
            </Content>
        )
    }
}

export default Events
