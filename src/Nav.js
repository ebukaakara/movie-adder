import React, { useContext } from 'react';
import { movieContext } from './MovieContext';


const Nav = () => {
    const [movies, setmovies] = useContext(movieContext)
    return (
        <div className="nav">
      <h3>Movie-Adder</h3>
      <p>List of Movies: {movies.length}</p>

    </div>
    )
}

export default Nav;