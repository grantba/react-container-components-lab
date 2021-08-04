import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = `${process.env.REACT_APP_KEY}`;
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {

    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${process.env.REACT_APP_KEY}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }
    render() {
        return(
            <div className="latest-movie-reviews">
                <div className="review-list"><h1 style={{textDecoration: "underline", color: "blue"}}>Latest Movie Reviews</h1>{this.state.reviews.map(movie => <MovieReviews key={movie.display_title} movie={movie}/>)}</div>
            </div>
        )
    }
};

export default LatestMovieReviewsContainer;