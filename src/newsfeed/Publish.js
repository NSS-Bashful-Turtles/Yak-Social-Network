import React, { Component } from 'react'
import 'bulma/css/bulma.min.css';
import "./newsfeed.css"
class Publish extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: ""
        }
    }
    makePublicPost = function(){
        const publicPostText = document.getElementById("publish-input").value;
        console.log(publicPostText)
    }
    render() {
        return (

            <div>

                <div className="publish">
                    <h3 >MAKE A POST</h3>
                    <input id="publish-input" type="text" placeholder="Add your text here"/>
                </div>
                <button id="publicPost" onClick={this.makePublicPost}>Public Post></button>
                <button id="privatePost">Private Post></button>
            </div>
        )
    }
}

export default Publish