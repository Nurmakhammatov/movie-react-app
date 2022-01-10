import React, { useState, useEffect } from "react";

import {
  getPopularMovies,
  getPopularTv,
  getSearchMovie,
  getTrends,
} from "./../services/movieService";
import { Routes, Route, Link } from "react-router-dom";

import Movies from "./common/Movies";
import TvSeries from "./common/TvSeries";
import Layout from "./common/Layout";
import Search from "./common/Search";

function Main() {
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [trends, setTrends] = useState([]);
  const [search, setSearch] = useState(true);

  const [moviePage, setMoviePage] = useState(1);
  const [tvPage, setTvPage] = useState(1);

  const fetchMovie = async () => {
    const { data: resMovies } = await getPopularMovies(moviePage);
    setMovies([...movies, ...resMovies.results]);
  };

  const fetchTv = async () => {
    const { data: resTvSeries } = await getPopularTv(tvPage);
    setTvSeries([...tvSeries, ...resTvSeries.results]);
  };

  const fetchTrends = async () => {
    const { data } = await getTrends();
    setTrends(data.results);
    setFilteredMovies(data.results);
  };

  useEffect(() => {
    fetchTv();
  }, [tvPage]);

  useEffect(() => {
    fetchMovie();
  }, [moviePage]);

  const options = {
    year: "numeric",
  };
  const handleSearchMovie = async (query) => {
    if (query !== "") {
      const { data } = await getSearchMovie(query, moviePage);
      setFilteredMovies(data.results);
      setSearch(false);
    } else {
      setFilteredMovies(trends);
      setSearch(true);
    }
  };
  // const handleNextPage = () => {
  //   moviePage > 1
  // }

  const handleNextMoviePage = () => {
    setMoviePage(moviePage + 1);
  };
  const handleNextTvPage = () => {
    setTvPage(tvPage + 1);
  };

  console.log("Movies:", movies);
  console.log("Tv:", tvSeries);
  console.log("SearchList:", filteredMovies);
  console.log("Trends:", trends);

  return movies === [] && tvSeries === [] ? (
    <h1 className="m-5 p-5 text-center">loading...</h1>
  ) : (
    <div className="container-fluid pb-3">
      <div className="row pt-4">
        <Link className="link-tag" to="/">
          <div className="col-sm-12 fs-1 px-4 ">
            Find Movies, Tv series, and more..
          </div>
        </Link>
        <Search handleSearchMovie={handleSearchMovie} moviesList={movies} />
      </div>
      <Layout />
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              movie={movies}
              handleNext={handleNextMoviePage}
              options={options}
            />
          }
        />

        <Route
          path="/search"
          element={
            <Movies movie={filteredMovies} options={options} search={search}>
              <h1>Trends</h1>
            </Movies>
          }
        />

        <Route
          path="/tvSeries"
          element={<TvSeries handleNext={handleNextTvPage} series={tvSeries} />}
        />
      </Routes>
    </div>
  );
}
export default Main;
