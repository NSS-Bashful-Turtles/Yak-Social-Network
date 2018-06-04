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


    render() {
        return (
            <Section>
                <Title>Ads</Title>
                {this.state.adsList.map(add => (
                    <Add 
                        key={add.id}
                        title={add.title}
                        company={add.company}
                        content={add.content}
                    />
                ))}
            </Section>
        )
    }
}

export default AddList
