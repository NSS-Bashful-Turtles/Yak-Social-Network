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


    render() {
        return (
            <Container>
                <Title>Search Results</Title>
                {this.state.searchCompleted === false &&
                    <Title>Please select a search category</Title>
                }

                {this.props.match.params.searchType === "People" &&
                    <PeopleResults
                        searchString={this.props.match.params.searchValue}
                    />
                }

                {this.props.match.params.searchType === "Posts" &&
                    <PostsResults
                        searchString={this.props.match.params.searchValue}
                    />
                }

                {this.props.match.params.searchType === "Events" &&
                    <EventsResults 
                        searchString={this.props.match.params.searchValue}
                    />
            }

            </Container>
        )
    }
}

export default Search
