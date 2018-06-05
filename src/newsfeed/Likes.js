import React, { Component } from 'react'

class Likes extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    loadPublicPosts = function(){
        console.log("hello")
        fetch(`http://localhost:8088/likes?publicPostId={this.props.id}&_expand=user`)
        .then(r => r.json())
        .then(response => {
            console.log(response);
            this.setState({
                posts: response
            })
        })
    }.bind(this);

}
export default Likes