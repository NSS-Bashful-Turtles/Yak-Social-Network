import React, { Component } from 'react'
import { Title, Section } from 'bloomer';
import Add from './Add';


class AddList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            adsList: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8088/ads?_limit=3")
            .then(r => r.json())

            .then(response => {
                this.setState({
                    adsList: response
                })
            })
    }

    removeAdd = function(e) {
        console.log(e.target.id)
        //get an array of the adds currently on the page
        const oldAddList = this.state.adsList
        //create new add list by filtering out the add they clicked on
        const newAddList = oldAddList.filter(add => add.id !== parseInt(e.target.id))
        //set state to the new array of ads
        this.setState({
            adsList: newAddList
        })
    }.bind(this)

    //function to render a title for the section if their are ads to be displayed
    checkForAds() {
        if (this.state.adsList.length > 0) {
            return <Title>Ads</Title>
        }
    }


    render() {
        return (
            <Section>
                {this.checkForAds()}
                {this.state.adsList.map(add => (
                    <Add 
                        id={add.id}
                        key={add.id}
                        title={add.title}
                        company={add.company}
                        content={add.content}
                        removeAdd={this.removeAdd}
                    />
                ))}
            </Section>
        )
    }
}

export default AddList
