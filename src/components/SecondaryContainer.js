import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    movies.nowPlayingMovies &&
    movies.topRatedMovies &&
    movies.popularMovies &&
    movies.upcomingMovies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
