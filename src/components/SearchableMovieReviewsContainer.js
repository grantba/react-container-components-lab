import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = `${process.env.REACT_APP_KEY}`;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

let popupMessage = "";

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [], 
        searchTerm: ""
    }

    searchForm = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    submitSearch = event => {
        event.preventDefault()
        event.target.name.value = ""
        fetch(URL.concat(`query=${this.state.searchTerm}&api-key=${process.env.REACT_APP_KEY}`))
        .then(resp => resp.json())
        .then(data => {
            if (data.results === null) {
                popupMessage = "We could not find any reviews for that movie. Please try again."
                this.setState({
                    reviews: []
                })
            } else {
                this.setState({
                    reviews: data.results
                })
            }
        })
    }
    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.submitSearch}>
                    <label>
                            Search for a  New Movie:
                            <br></br><input type="text" name="name" placeholder="Enter Name of Movie" onChange={this.searchForm} />
                    </label>
                    <br></br><input type="submit" value="Search" />
                </form>
            {this.state.movies !== null && this.state.reviews.length ?
                <div className="review-list"><h1 style={{textDecoration: "underline", color: "blue"}}>Search Results</h1>{this.state.reviews.map(movie => <MovieReviews key={movie.display_title} movie={movie}/>)}</div>
            : 
            <div className="empty-list"><MovieReviews/>{popupMessage !== "" ? <h2>{popupMessage}</h2> : null}</div>
            }
            </div>
        )
    }
};

export default SearchableMovieReviewsContainer;