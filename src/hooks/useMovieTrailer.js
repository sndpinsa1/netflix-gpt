import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../store/movieSlice";
import { useDispatch } from "react-redux";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovieVideo = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await response.json();
      if (json.results.length > 0) {
        dispatch(addTrailer(json.results[0]));
      }
    };
    fetchMovieVideo();
  }, []);
};
