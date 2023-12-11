import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";
import { API_OPTIONS, API_URL_NOWPLAYING } from "../utils/constants";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      const response = await fetch(API_URL_NOWPLAYING, API_OPTIONS);
      const json = await response.json();
      dispatch(addNowPlayingMovies(json.results));
    };

    fetchNowPlayingMovies();
  }, []);
};
