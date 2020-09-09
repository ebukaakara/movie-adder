import React, { useState, createContext } from 'react'

export const movieContext = createContext();

export const MovieProvider = (props) => {

    const [movies, setmovies] = useState([{
        id: 1,
        name: "Batman",
        price: "N400"
    },
    {
        id: 2,
        name: "Avengers",
        price: "N300"
    },
    {
        id: 3,
        name: "Inception",
        price: "N500"
    },
    {
        id: 4,
        name: "Minion",
        price: "N400"
    }
])


    return (
        <movieContext.Provider value={[movies, setmovies]}>
            {props.children}
        </movieContext.Provider>
    )
}

