import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/movieSlice";
import { API_OPTIONS, URL_UPCOMING_MOVIES } from "../utils/constants";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(URL_UPCOMING_MOVIES, API_OPTIONS);
      const json = await response.json();
      dispatch(addUpcomingMovies(json.results));
    };

    fetchMovies();
  }, []);
};
