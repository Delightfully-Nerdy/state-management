import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
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

  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
