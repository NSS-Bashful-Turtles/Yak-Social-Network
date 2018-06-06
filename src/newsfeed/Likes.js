import React, { Component } from 'react'
// import $ form "jquery"
import "./newsfeed.css"

class Likes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes:[]
        }
        this.uniqueKey = 1
    }
    loadLikes = function(){
        fetch(`http://localhost:8088/likes?publicPostId=${this.props.id}&_expand=user`)
        .then(r => r.json())
        .then(response => {
            this.setState({
                likes:response
            })
        })
    }.bind(this);

    componentDidMount(){
        this.loadLikes()
    }

    showLikes = function(id){
        document.getElementById(id).style.display = "inline";
    }
    hideLikes = function(id){
        document.getElementById(id).style.display = "none";
    }
    displayLikes = function(){
        if(this.state.likes.length > 2){
            const remaining = this.state.likes.slice(2);
            return [<p key={this.uniqueKey++}>{this.state.likes[0].user.name.first}
            {this.state.likes[0].user.name.last}, {this.state.likes[1].user.name.first}
            {this.state.likes[1].user.name.last} and <span className="other-likes" onMouseOver={()=> this.showLikes(this.props.id)} onMouseLeave={()=>this.hideLikes(this.props.id)}>{this.state.likes.length - 2} others </span>liked this post</p>,
            remaining.map(like => {
                return <div id={this.props.id} key={like.id}>{like.user.name.first}
                 {like.user.name.last}</div>
             })
            ]
        }else{
            return this.state.likes.map(like => {
               return <div key={like.id}>{like.user.name.first}
                {like.user.name.last} liked this post</div>
            })
        }
    }

    likePost = function(){
        fetch(`http://localhost:8088/likes?publicPostId=${this.props.id}&userId=${this.props.activeUser}`)
        .then(r => r.json())
        .then(response => {
            if(response.length > 0){
                alert("You've already liked this post")
            }else{
                const newLike = {
                    userId: this.props.activeUser,
                    publicPostId: this.props.id
                }
                const newLikeNotification = {
                    userId: this.props.activeUser,
                    postId: this.props.id,
                    receiverId: null

                }
                fetch("http://localhost:8088/likes",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newLike)
                })
                fetch("http://localhost:8088/likeNotifications",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newLikeNotification)
                    })
            }
        })
    }.bind(this);

    render() {
        return (
            <div>
                <button onClick={this.likePost}>Like</button>
                {
                    this.displayLikes()
                }
            </div>
        )
    }
}
export default Likes