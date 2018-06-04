import React, { Component } from 'react';

class Friend extends Component {
    constructor(props){
        super(props)
    }
    render() {
            return (
                <article>
                    <h2>{this.props.first} {this.props.last}</h2>
                </article>
            )
    }
}

export default Friend