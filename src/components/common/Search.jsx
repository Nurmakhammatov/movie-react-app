import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";

const InputWrapper = styled.div`
  width: 87.6vw;
  height: 3em;
  border-radius: 3em;
  background-color: #211f30;
  color: white;
  display: flex;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 0.66em;
  padding-bottom: 0.5em;
  font-size: 1em;
  text-decoration: none;
`;

const CustomInput = styled.input`
  width: 100%;
  background-color: #211f30;
  outline: none;
  border: none;
  color: white;
  padding: 0.5em;
  text-decoration: none;
`;
function Search({ handleSearchMovie }) {
  return (
    <div>
      <Link to="/search" className="link-tag">
        <InputWrapper className="col-sm px-3 py-3 text-center">
          <FaSearch />
          <CustomInput
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearchMovie(e.target.value)}
          />
        </InputWrapper>
      </Link>
    </div>
  );
}
export default Search;
