import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="pl-12">
      <h1 className="font-bold text-white text-3xl py-5">{title}</h1>
      <div className="flex overflow-auto">
        {movies.map((movie) => {
          return (
            <img
              className="px-2"
              key={movie.id}
              src={IMG_URL + movie?.poster_path}
              alt="movie poster"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
