import React, { Component } from 'react'
import { Title } from 'bloomer'


class PeopleResult extends Component {


    render() {
        return (
            <Title>{this.props.name.first} {this.props.name.last}</Title>
        )
    }
}

export default PeopleResult
