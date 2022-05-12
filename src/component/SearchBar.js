import React from "react";

import "../App.css";

const SearchBar = () => {
  return (
    <div className="searchInner">
      <div className="sortBy">
        <span>Sort By</span>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="searchBar">
        <form action="/" method="get">
          <label htmlFor="header-search">
            <span style={{ margin: "30px" }} className="visually-hidden">
              Search blog posts
            </span>
          </label>

          <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s"
          />

          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
