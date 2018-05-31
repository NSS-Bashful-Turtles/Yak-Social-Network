import React, { Component } from 'react'
import Posts from "./posts"

class NewsFeed extends Component {
    // set default data for the component
    // if xhr request does not complete the default information will let you know
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    loadPublicPosts = function(){
        fetch(`http://localhost:8088/posts?private=false`)
        .then(r => r.json())
        .then(response => {
            this.setState({
                posts: response
            })
        })
    }.bind(this);
    loadPrivatePosts = function(){
        fetch(`http://localhost:8088/posts?private=true`)
        .then(r => r.json())
        .then(response => {
            this.setState({
                posts: response
            })
        })
    }.bind(this);

    // on component mount, request userid by the property userId
    componentDidMount() {
        this.loadPublicPosts();
    }

    // render the component based on information in the state
    render() {
        return (
            <div>
                <button value="Public Posts" onClick={this.loadPublicPosts}>Public Posts</button>
                <button value="Private Posts" onClick={this.loadPrivatePosts}>Private Posts</button>

                {
                this.state.posts.map(element => (
                    <Posts image={element.image} content={element.content} key={element.id}/>
                ))
                }
            </div>

        )

    }
}

export default NewsFeed