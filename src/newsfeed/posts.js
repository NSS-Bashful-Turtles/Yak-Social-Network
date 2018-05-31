import React, { Component } from 'react'

class Posts extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt=""/>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Posts