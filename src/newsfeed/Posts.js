import React, { Component } from 'react'
import { Image, Content,Icon,Delete, Media, MediaLeft, MediaRight, MediaContent, Level, LevelItem, LevelLeft,LevelRight } from 'bloomer';
import "./newsfeed.css"

class Posts extends Component {

    addButton = function () {
        if (this.props.activeUser === this.props.postUserId) {
            return (
                <MediaRight><Delete id={this.props.postId} onClick={this.props.deletePost} /></MediaRight>
            )
        }
    }.bind(this)

    render() {
        return (
            <div className="posts">
                <Media>
                    <MediaLeft>
                        <Image isSize='64x64' src={this.props.userImage} />
                    </MediaLeft>
                    <MediaContent>
                        <Content>
                            <p>
                                <strong>{this.props.firstName} {this.props.lastName}</strong> <small>@{this.props.userName}</small> posted: <small>{this.props.timeStamp}</small>
                                <br />
                            </p>
                        </Content>
                        <img className="post-image" src={this.props.image} />
                        <Content>
                            <p>
                                {this.props.content}
                            </p>
                        </Content>
                    </MediaContent>
                    {this.addButton()}
                </Media>
            </div>
        )
    }
}

export default Posts