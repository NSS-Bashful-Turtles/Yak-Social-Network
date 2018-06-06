import React, { Component } from 'react'
import 'bulma/css/bulma.min.css';
import "./newsfeed.css"
import FriendDropdown from "./FriendDropdown"


class Publish extends Component {
    constructor(props) {
        super(props)

        this.state = {
                userId: "",
                timeStamp: "",
                content: "",
                image: "",
                receiverId: "",
                private: false
        }
    }

    getReceiverId = (receiver) => {
        this.setState({receiverId: receiver})
    }

    handleFormFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    makePublicPost = function(){
        const newPost = {
            userId: this.props.activeUser,
            timeStamp: new Date(),
            content: this.state.content,
            image: "",
            receiverId: null,
            private: false
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
        if(this.state.receiverId === ""){
            alert("Please choose a friend")
        }else{
            const newPost = {
                userId: this.props.activeUser,
                timeStamp: new Date(),
                content: this.state.content,
                image: "",
                receiverId: this.state.receiverId,
                private: true
            }
            fetch("http://localhost:8088/posts",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
            })
        }
    }.bind(this);

    render() {
        return (
            <div>
                <div className="publish">
                    <h3 >MAKE A POST</h3>
                    <input id="content" onChange={this.handleFormFieldChange} type="text" placeholder="Add your text here"/>
                    <input id="image" onChange={this.handleFormFieldChange} type="text" placeholder="Add add image URL here"/>
                </div>
                <button id="publicPost" onClick={this.makePublicPost}>Public Post</button>
                <button id="privatePost" onClick={this.makePrivatePost}>Private Post</button>
                <FriendDropdown callback={this.getReceiverId} activeUser={this.props.activeUser}/>
            </div>
        )
    }
}

export default Publish