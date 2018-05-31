import React, { Component } from 'react'
import 'bulma/css/bulma.min.css';
import "./newsfeed.css"
class Publish extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {
                "userId": "",
                "timeStamp": "",
                "content": "",
                "image": "",
                "receiverId": "null",
                "private": "false"
            }
        }
    }

    handleFormFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    makePublicPost = function(){
        const newPost = {
            userId: "1",
            timeStamp: new Date(),
            content: this.state.content,
            image: "",
            receiverId: "null",
            private: "false"
        }
        fetch("http://localhost:8088/posts",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
        })
    }.bind(this);

    makePrivatePost = function(){
        const newPost = {
            userId: "1",
            timeStamp: new Date(),
            content: this.state.content,
            image: "",
            receiverId: "null",
            private: "true"
        }
        fetch("http://localhost:8088/posts",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
        })
    }.bind(this);


    render() {
        return (
            <div>
                <div className="publish">
                    <h3 >MAKE A POST</h3>
                    <input id="content" onChange={this.handleFormFieldChange} type="text" placeholder="Add your text here"/>
                </div>
                <button id="publicPost" onClick={this.makePublicPost}>Public Post></button>
                {/* waiting to get friends here */}
                <button id="privatePost" onClick={this.makePrivatePost}>Private Post></button>
            </div>
        )
    }
}

export default Publish