import React, { Component } from 'react'

class Posts extends Component {
    render() {
        return (
            <div>
                <img className="user_post_profile_image"
                src={this.props.userImage} alt=""></img>
                <p>{this.props.firstName} {this.props.lastName} posted: </p>
                <img src={this.props.image} alt=""/>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Posts