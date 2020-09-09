import React, {
    useState,
    useContext
} from 'react'
import Movie from './Movie'
import {
    movieContext
} from './MovieContext'

const MovieList = () => {

    const [movies, setmovies] = useContext(movieContext)

    return ( <
        div > {
            movies.map(movie => ( <
                Movie name = {
                    movie.name
                }
                price = {
                    movie.price
                }
                />
            ))
        } <
        /div>
    )
}

export default MovieList