import React,{useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
          name: "Harry Potter",
          price: "K100",
          id: 25798,
        },
        {
          name: "Game of Thrones",
          price: "K100",
          id: 56735,
        },
        {
          name: "Inception",
          price: "K100",
          id: 99327,
        },
      ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}