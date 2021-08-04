// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({movie}) => {
    return(
        movie !== undefined ?
        <div key={movie.id} className="review">
            <h1>{movie.display_title}</h1> 
            <h2>Rated: {movie.mpaa_rating}</h2>
            <p>{movie.summary_short}</p>
        </div> :
        null 
    )
};

export default MovieReviews;