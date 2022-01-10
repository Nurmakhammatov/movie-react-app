import React from "react";
import { api } from "../../config";

function TvSeries({ series, handleNext }) {
  return (
    <div className="row">
      {series.map((s) => (
        <div key={s.name} className="col-6">
          <img
            className="img-fluid movieImg"
            src={api.imgSrc + s.poster_path}
            alt="Movie"
          />
          <p className="m-2">{s.name}</p>
        </div>
      ))}
      <div className="text-center">
        <button onClick={handleNext} className="btn btn-dark btn-lg">
          More...
        </button>
      </div>
    </div>
  );
}

export default TvSeries;
