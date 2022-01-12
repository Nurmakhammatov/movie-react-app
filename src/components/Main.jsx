import React, { useState, useEffect } from "react";

import {
  getMovieDetails,
  getDetails,
  getTvDetails,
  getPopularMovies,
  getPopularTv,
  getSearchMovie,
  getTrends,
} from "./../services/movieService";
import { Routes, Route, Link } from "react-router-dom";

import Movies from "./common/Movies";

import Layout from "./common/Layout";
import Search from "./common/Search";
import About from "./common/About";
import ButtonTop from "./common/ButtonTop";

function Main() {
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [trends, setTrends] = useState([]);
  const [search, setSearch] = useState(true);
  const [active, setActive] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [tvSeriesList, setTvSeriesList] = useState([]);
  const [details, setDetails] = useState({});
  // const [id, setId] = useState({});

  const [moviePage, setMoviePage] = useState(1);

  const [tvPage, setTvPage] = useState(1);

  const fetchData = () => {
    fetchTv();
    fetchMovie();
    fetchTrends();
  };

  const fetchMovie = async () => {
    const { data: resMovies } = await getPopularMovies(moviePage);
    setMovies(resMovies.results);
  };

  const fetchTv = async () => {
    const { data: resTvSeries } = await getPopularTv(tvPage);
    setTvSeries(resTvSeries.results);
  };

  const fetchTrends = async () => {
    const { data } = await getTrends();
    setTrends(data.results);
    setFilteredMovies(data.results);
  };

  // const fetchAboutMovie = async () => {
  //   const { data } = getMovieDetails(425909);
  //   setDetails(data);
  // };
  // console.log(fetchAboutMovie());
  // console.log(details);

  useEffect(() => {
    fetchData();
    nextMovies();
    nextTvSeries();
  }, []);

  const options = {
    year: "numeric",
  };

  const handleSearchMovie = async (query) => {
    setActive(2);
    if (query !== "") {
      const { data } = await getSearchMovie(query);
      setFilteredMovies(
        data.results.filter(
          (m) =>
            m.media_type !== "person" &&
            m.poster_path !== null &&
            m.backdrop_path !== null
        )
      );
      setSearch(false);
    } else {
      setFilteredMovies(trends);
      setSearch(true);
    }
  };

  const nextPage = (page, setPage) => {
    setPage(page + 1);
  };

  const nextMovies = async () => {
    nextPage(moviePage, setMoviePage);
    const { data: resMovies } = await getPopularMovies(moviePage);
    setMovieList(resMovies.results);
  };

  const handleNextMoviePage = () => {
    nextMovies();
    movieList[0].id !== movies[0].id
      ? setMovies((prev) => [...prev, ...movieList])
      : setMovies(movies);
  };

  const nextTvSeries = async () => {
    nextPage(tvPage, setTvPage);
    const { data: resMovies } = await getPopularTv(tvPage);
    setTvSeriesList(resMovies.results);
  };

  const handleNextTvPage = () => {
    nextTvSeries();
    tvSeriesList[0].id !== tvSeries[0].id
      ? setTvSeries((prev) => [...prev, ...tvSeriesList])
      : setTvSeries(tvSeries);
  };

  const links = {
    main: "/",
    tv: "/tvSeries",
    search: "/search",
  };
  // console.log("Movies:", movies);
  // console.log("Tv:", tvSeries);
  // console.log("SearchList:", filteredMovies);
  // console.log("Trends:", trends);

  const handleActive = () => {
    setActive(0);
  };

  const handleGetMovieInfo = async (m) => {
    const data = await getMovieDetails(m.id);
    setDetails(data.data);
  };

  const handleGetTvInfo = async (m) => {
    const data = await getTvDetails(m.id);
    setDetails(data.data);
  };
  const handleGetInfo = async (m) => {
    const data = await getDetails(m.id, m.media_type);
    setDetails(data.data);
  };
  // const handleScrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };

  return (
    <div className="container-fluid pb-3">
      <div className="row pt-4">
        <Link className="link-tag" to={links.main} onClick={handleActive}>
          <div className="col-sm-12 fs-1 px-4">
            Find Movies, Tv series, and more..
          </div>
        </Link>
        <Search handleSearchMovie={handleSearchMovie} links={links} />
      </div>
      <Layout active={active} setActive={setActive} links={links} />
      <Routes>
        <Route
          path={links.main}
          element={
            <Movies
              movie={movies}
              handleNext={handleNextMoviePage}
              options={options}
              getInfo={handleGetMovieInfo}
            />
          }
        />

        <Route
          path={links.tv}
          element={
            <Movies
              handleNext={handleNextTvPage}
              options={options}
              movie={tvSeries}
              getInfo={handleGetTvInfo}
            />
          }
        />

        <Route
          path={links.search}
          element={
            <Movies
              movie={filteredMovies}
              options={options}
              search={search}
              getInfo={handleGetInfo}
            />
          }
        />
        <Route path={`/${details.id}`} element={<About details={details} />} />
      </Routes>
      <ButtonTop />
    </div>
  );
}
export default Main;
