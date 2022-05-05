import React from 'react';


function Movie({ name, title, rating, summary }) {

    return (
        <div className='movie-container'>
            <img src={title} alt={name} className='movie-title' />
            <div className='movie-specs'>
                <h2 className='movie-name'>{name}</h2>
                <p className='movie-rating'>⭐ {rating}</p>
            </div>
            <p className='movie-summary'>{summary}</p>
        </div>
    )
}

export default Movie;