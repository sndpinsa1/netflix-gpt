import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../store/movieSlice";
import { API_OPTIONS, URL_TOP_RATED_MOVIES } from "../utils/constants";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(URL_TOP_RATED_MOVIES, API_OPTIONS);
      const json = await response.json();
      dispatch(addTopratedMovies(json.results));
    };

    fetchMovies();
  }, []);
};
