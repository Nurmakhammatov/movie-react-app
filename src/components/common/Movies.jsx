import React from "react";
import { api } from "../../config";

function Movies({ movie, options, handleNext, search }) {
  return (
    <div className="row">
      {search ? <h5 className="mb-3 text-center">Trends last day</h5> : null}
      {movie.map((m) => (
        <div
          key={`${m.id}/${m.title}/${m.vote_count}/${m.backdrop_path}`}
          className="col-6"
        >
          <img
            className="img-fluid movieImg"
            src={api.imgSrc + m.poster_path}
            alt="Movie"
          />
          <p className="m-2">
            {m.title ? m.title : m.name} (
            {m.release_date
              ? new Date(m.release_date).toLocaleDateString("en-US", options)
              : new Date(m.first_air_date).toLocaleDateString("en-US", options)}
            )
          </p>
        </div>
      ))}
      {handleNext === undefined ? null : (
        <div className="text-center">
          <button onClick={handleNext} className="btn btn-dark btn-lg">
            More...
          </button>
        </div>
      )}
    </div>
  );
}

export default Movies;
