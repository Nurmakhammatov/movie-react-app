import httpSevice from "./httpService";
import { api } from "./../config";

export const getPopularMovies = (num) =>
  httpSevice.get(
    `${api.apiUrl}discover/movie?sort_by=popularity.desc&${api.apiKey}&language=en-US&page=${num}`
  );

export const getPopularTv = (num) =>
  httpSevice.get(
    `${api.apiUrl}tv/popular?${api.apiKey}&language=en-US&page=${num}`
  );

export const getGenres = () =>
  httpSevice.get(`${api.apiUrl}genre/movie/list?${api.apiKey}&language=en-US`);

export const getSearchMovie = (query, num) =>
  httpSevice.get(
    `${api.apiUrl}search/multi/?${api.apiKey}&language=en-US&query=${query}&page=${num}`
  );

export const getTrends = () =>
  httpSevice.get(`${api.apiUrl}trending/all/day?${api.apiKey}`);

export const getMovieDetails = (id) =>
  httpSevice.get(`${api.apiUrl}movie/${id}?${api.apiKey}`);

export const getTvDetails = (id) =>
  httpSevice.get(`${api.apiUrl}tv/${id}?${api.apiKey}`);

export const getDetails = (id, type) =>
  httpSevice.get(`${api.apiUrl}${type}/${id}?${api.apiKey}`);
