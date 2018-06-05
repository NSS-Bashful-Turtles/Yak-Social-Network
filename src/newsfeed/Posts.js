import React, { Component } from 'react'
import { Image, Content,Delete, Media, MediaLeft, MediaRight, MediaContent} from 'bloomer';
import "./newsfeed.css"

class Posts extends Component {
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
                        <img className="post-image" src={this.props.image} alt=""/>
                        <Content>
                            <p>
                                {this.props.content}
                            </p>
                        </Content>
                    </MediaContent>
                    <MediaRight><Delete /></MediaRight>
                </Media>
            </div>
        )
    }
}

export default Posts