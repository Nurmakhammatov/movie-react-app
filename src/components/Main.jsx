import React from "react";

import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 87.6vw;
  height: 2.7em;
  border-radius: 3em;
  background-color: #211f30;
  color: white;
  display: flex;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1.3em;
  padding-bottom: 0.5em;
  font-size: 1.2em;
`;

const CustomInput = styled.input`
  width: 100%;
  background-color: #211f30;
  outline: none;
  border: none;
  color: white;
  padding: 0.5em;
`;

function Main() {
  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <div className="col-sm-12 fs-1 px-4">
          Find Movies, Tv series, and more..
        </div>
        <InputWrapper className="col-sm px-4 py-3 text-center">
          <FaSearch />
          <CustomInput type="text" placeholder="Search..." />
        </InputWrapper>
      </div>
      <p className="text-center menu p-3">
        <span className="px-2 menu-selected">Movies</span>
        <span className="px-2">Tv Series</span>
        <span className="px-2">Documentary</span>
        <span className="px-2">Sports</span>
      </p>
    </div>
  );
}
export default Main;
