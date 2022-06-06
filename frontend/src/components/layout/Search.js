import React, { useState } from "react";
import "./Search.css";
const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form className="searchBox" onSubmit={searchHandler}>
      <input
        type="text"
        id="search_field"
        className="form-control"
        placeholder="Enter Product Name ..."
        onChange={(e) => setKeyword(e.target.value)}
      />
    </form>
  );
};

export default Search;
