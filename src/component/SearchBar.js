import React, { useState } from "react";

import "../App.css";

const SearchBar = (props) => {
  const [key, setKey] = useState();

  const handleChange = (value) => {
    setKey(value);
  };

  return (
    <div className="searchInner">
      <div className="sortBy">
        <span>Sort By</span>
        <select
          name="carSort"
          id="cars"
          onChange={(e) => props.shortCars(e.target.value)}
        >
          <option value="blank"></option>
          <option value="low">Lowest Price</option>
          <option value="high">Highest Price</option>
        </select>
      </div>
      <div className="searchBar">
        <label htmlFor="header-search">
          <span style={{ margin: "30px" }} className="visually-hidden">
            Search blog posts
          </span>
        </label>

        <input
          type="text"
          id="header-search"
          placeholder="Search Car"
          name="s"
          onChange={(e) => handleChange(e.target.value)}
        />

        <button onClick={() => props.handleSearch(key)}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
