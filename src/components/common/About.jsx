import React from "react";
import { Link } from "react-router-dom";
import { api } from "./../../config";
import Back from "./img/back.svg";

import { BiTime } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { BsEasel } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import NotFound from "./NotFound";

function About({ details }) {
  console.log(details);
  // const genres = details.genres;
  const options = {
    year: "numeric",
    day: "numeric",
    month: "long",
  };
  return details ? (
    <div>
      <div className="about-img">
        <img
          src={api.imgSrc + details.backdrop_path}
          alt="i"
          className="img-fluid "
        />
        <Link to="/">
          <img src={Back} alt="back" className="top-left" />
        </Link>
      </div>
      <div>
        <div className="d-title">
          <h1 className="">{details.title ? details.title : details.name}</h1>
        </div>

        {details.runtime ? (
          <div className="d-title__info">
            <div className="d-title__info">
              <BiTime className="img-fluid d-title__img" />
              <div className="d-title__text"> {details.runtime} minutes</div>
            </div>
            <div className="d-title__info mx-3">
              <FaStar className="img-fluid d-title__img " />
              <div className="d-title__text">{details.vote_average} (IMDb)</div>
            </div>
          </div>
        ) : (
          <div className="d-title__info">
            <div className="d-title__info">
              <BsEasel className="img-fluid d-title__img" />
              <div className="d-title__text">
                Episodes: {details.number_of_episodes}, Seasons:{" "}
                {details.number_of_seasons}
              </div>
            </div>
            <div className="d-title__info mx-3">
              <FaStar className="img-fluid d-title__img " />
              <div className="d-title__text">{details.vote_average} (IMDb)</div>
            </div>
          </div>
        )}

        <br />
        <div className="br"></div>
        <div className="row">
          {details.release_date ? (
            <div className="col-5 my-3 m-1">
              <div className="fs-3">Release date</div>
              <div className="d-title__text my-2">
                {new Date(details.release_date).toLocaleDateString(
                  "en-US",
                  options
                )}
              </div>
            </div>
          ) : (
            <div className="col-5 my-3 m-1">
              <div className="fs-3">First air date</div>
              <div className="d-title__text my-2">
                {new Date(details.first_air_date).toLocaleDateString(
                  "en-US",
                  options
                )}
              </div>
            </div>
          )}
          <div className="col-6 my-3 m-1">
            <div className="fs-3">Genre</div>
            <div className="d-title__text row">
              {details.genres.map((g) => (
                <span key={g.id} className="genre col my-2 mx-2 px-2 p-2">
                  {g.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="br"></div>
        <div className="fs-3 mt-2 mb-2 ">Production Country</div>
        <div className="row">
          {details.production_countries.map((c) => (
            <div key={c.iso_3166_1} className="d-title__info mt-1 col-12">
              <ImEarth className="img-fluid d-title__img " />
              <div className="d-title__text">
                {c.name} ({c.iso_3166_1})
              </div>
            </div>
          ))}
        </div>

        <div>
          <br />
          <div className="br"></div>
          <div className="fs-3 mt-2 mb-2 ">Production Companies</div>
          <div className="row">
            {details.production_companies.map((c) =>
              c.logo_path ? (
                <div key={c.id} className="col-6 my-2">
                  <img
                    src={api.imgSrc + c.logo_path}
                    alt="logo"
                    className="img-fluid py-1 logo-img rounded px-1"
                  />
                </div>
              ) : null
            )}
          </div>
        </div>

        <br />
        <div className="br"></div>

        <div>
          <div className="fs-3 mt-2 mb-2">Synopsis</div>
          <p className="d-title__text">{details.overview}</p>
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}

export default About;
