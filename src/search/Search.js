import React, { Component } from 'react'
import { Title, Container } from 'bloomer';
import PeopleResults from './PeopleResults'
import PostsResults from './PostsResults';
import EventsResults from './EventsResults';


/* 
    Entry point for search results display
    this module will determine what needs to be searched for
    and call the corresponding module
*/

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchCompleted: true
        }
    }

    // checks to make sure user selected a search parameter
    componentDidMount() {
        if (this.props.match.params.searchType === "Search for") {
            this.setState({
                searchCompleted: false
            })
        }
    }

    runSearch() {
        if (this.props.match.params.searchType === "Search for") {
            return <Title>Please select a search category</Title>
        } else {
            switch (this.props.match.params.searchType) {
                case "People":
                    return <PeopleResults searchString={this.props.match.params.searchValue} />
                case "Posts":
                    return <PostsResults searchString={this.props.match.params.searchValue} />
                case "Events":
                    return <EventsResults searchString={this.props.match.params.searchValue} />
                default:
                    return <Title>There was an error, you searh could not be completed, it was probably our fault </Title>
            }
        }
    }


    render() {
        return (
            <Container>
                {this.runSearch()}
            </Container>
        )
    }
}

export default Search
