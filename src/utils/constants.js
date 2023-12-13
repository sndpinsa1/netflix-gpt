export const API_URL_NOWPLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const URL_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const URL_TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const URL_UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjZlOGM5YTk0NDI2ZTM4NjNlNGQyZmE2ZmZlMTdjMiIsInN1YiI6IjY1NzY5ZTBhYTFkMzMyMDEzOGVhOTRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XzkXUt_39iieGtw6ubqnStoab1VLGvPRitrPeTrpDOg",
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w200";

export const SUPPORTED_LANGS = [
  { name: "English", identifier: "en" },
  { name: "Hindi", identifier: "hi" },
  { name: "Spanish", identifier: "sp" },
];
