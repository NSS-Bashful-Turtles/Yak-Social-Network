import React, { Component } from 'react'
import { Title, Container } from 'bloomer';
import PeopleResult from './PeopleResult'


class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchResults: [],
            searchCompleted: true
        }
    }

    componentDidMount() {
        if (this.props.match.params.searchType !== "Search for") {
            fetch(`http://localhost:8088/${this.props.match.params.searchType}?q=${this.props.match.params.searchValue}`)
                .then(r => r.json())

                .then(response => {
                    console.log(response)
                    this.setState({
                        searchResults: response
                    })
                })
        }
        else {
            this.setState({
                searchCompleted: false
            })
        }
    }


    render() {
        return (
            <Container>
                <Title>Search Results</Title>
                {this.state.searchCompleted === false &&
                    <Title>Please select a search category</Title>
                }
                {this.state.searchResults.map(user => (
                    <PeopleResult
                        name={user.name}
                        key={user.id}
                    />
                ))}
            </Container>
        )
    }
}

export default Search
