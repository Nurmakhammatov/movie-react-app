import React from "react";
import { api } from "../../config";
// import About from "./About";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";

function Movies({ movie, options, handleNext, search, getInfo }) {
  return movie.length !== 0 ? (
    <div className="row">
      {search ? <h5 className="mb-3 text-center">Trends last day</h5> : null}
      {movie.map((m) =>
        !m.poster_path ? null : (
          <div key={`${m.id}`} className="col-6 pb-3">
            <Link to={`/${m.id}`}>
              <img
                className="img-fluid movieImg"
                src={api.imgSrc + m.poster_path}
                alt="Poster"
                onClick={() => getInfo(m)}
              />
            </Link>
            {m.title || m.name ? (
              <p className="m-2">
                {m.title ? m.title : m.name} (
                {m.release_date
                  ? new Date(m.release_date).toLocaleDateString(
                      "en-US",
                      options
                    )
                  : new Date(m.first_air_date).toLocaleDateString(
                      "en-US",
                      options
                    )}
                )
              </p>
            ) : null}
          </div>
        )
      )}
      {handleNext === undefined ? null : (
        <div className="text-center">
          <button onClick={handleNext} className="btn btn-dark btn-lg">
            More...
          </button>
        </div>
      )}
    </div>
  ) : (
    <NotFound />
  );
}

export default Movies;
