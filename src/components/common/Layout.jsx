import React from "react";

import { Link } from "react-router-dom";

function Layout({ active, setActive, links }) {
  return (
    <p className="text-center menu p-3">
      <Link
        to={links.main}
        className={`${active === 0 ? "links-active links" : "links"} mx-2 `}
        onClick={() => setActive(0)}
      >
        Movies
      </Link>
      <Link
        to={links.tv}
        className={`${active === 1 ? "links-active links" : "links"} mx-2 `}
        onClick={() => setActive(1)}
      >
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
