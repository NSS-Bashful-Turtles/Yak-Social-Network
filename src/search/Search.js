import React, { Component } from 'react'
import { Title, Container } from 'bloomer';
import PeopleResults from './PeopleResults'
import PostsResults from './PostsResults';
import EventsResults from './EventsResults';
import AllResults from './AllResults';


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

    runSearch() {
        if (this.props.searchType === "Search for") {
            return <Title>Please select a search category</Title>
        } else {
            switch (this.props.searchType) {
                case "all":
                    return <AllResults searchString={this.props.searchValue} />
                case "people":
                    return <PeopleResults searchString={this.props.searchValue} />
                case "posts":
                    return <PostsResults searchString={this.props.searchValue} />
                case "events":
                    return <EventsResults searchString={this.props.searchValue} />
                default:
                    return <Title>There was an error, you searh could not be completed, it was probably our fault </Title>
            }
        }
    }


    render() {
        return (
            <Container>
                <Title>Search Results</Title>
                {this.runSearch()}
            </Container>
        )
    }
}

export default Search
