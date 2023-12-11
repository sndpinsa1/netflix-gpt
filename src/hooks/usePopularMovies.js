import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";
import { API_OPTIONS, URL_POPULAR_MOVIES } from "../utils/constants";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(URL_POPULAR_MOVIES, API_OPTIONS);
      const json = await response.json();
      dispatch(addPopularMovies(json.results));
    };

    fetchMovies();
  }, []);
};
