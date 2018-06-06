import React, { Component } from 'react'
import { Content, } from 'bloomer';
import './Add.css'

class Add extends Component {

    

    render() {
        return (
            <Content>
                <h3>{this.props.title}</h3>
                <p>{this.props.company}</p>
                <p>{this.props.content}</p>
                <i onClick={this.props.removeAdd} id={this.props.id} className="material-icons pointer">highlight_off</i>
            </Content>
        )
    }
}

export default Add
