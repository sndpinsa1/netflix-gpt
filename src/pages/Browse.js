import React from "react";
import Header from "../components/Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
