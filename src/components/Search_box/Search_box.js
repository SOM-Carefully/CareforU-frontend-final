import "./search_box.scss";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search_box() {
  return (
    <div className="search_box">
      <h4>검색</h4>
      <input className="search_input" placeholder="검색어를 입력하세요"></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
}

export default Search_box;
