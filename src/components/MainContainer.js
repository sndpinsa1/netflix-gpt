import React, { useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);

  if (!movies) return;

  const { original_title, overview, id } = movies[0];

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
