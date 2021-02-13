import React, { Component } from 'react'
import SearchBar from './Search/SearchBar'
import SearchResults from './Search/SearchResults'

export class Search extends Component {
    render() {
        return (
            <div>
                <p>Search</p>
                <div className="temp">
                    <SearchBar />
                    <SearchResults />
                </div>
            </div>
        )
    }
}

export default Search
