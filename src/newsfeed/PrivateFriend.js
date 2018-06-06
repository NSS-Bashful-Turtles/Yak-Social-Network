import React, { Component } from 'react';

class PrivateFriend extends Component {
    
    render() {
            return (
                <option value={this.props.first + " " + this.props.last}>
                    {this.props.first} {this.props.last}
                </option>
            )
    }
}

export default PrivateFriend