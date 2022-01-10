import React from "react";

import { Link } from "react-router-dom";

function Layout() {
  return (
    <p className="text-center menu p-3">
      <Link to="/" className="px-2 links">
        Movies
      </Link>
      <Link to="/tvSeries" className="px-2 links">
        Tv Series
      </Link>
      {/* <Link to="/search" className="px-2 links">
        Search
      </Link> */}
      {/* <Link className="px-2">Sports</Link> */}
    </p>
  );
}
export default Layout;
