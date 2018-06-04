import React, { Component } from 'react'
import { Content } from 'bloomer/lib/elements/Content';


class Add extends Component {


    render() {
        return (
            <Content>
                <h3>{this.props.title}</h3>
                <p>{this.props.company}</p>
                <p>{this.props.content}</p>
            </Content>
        )
    }
}

export default Add
