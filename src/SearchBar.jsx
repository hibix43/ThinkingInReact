import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input type="text" name="searchbar" />
      <input type="checkbox" name="seachbar-checkbox" />
      <label>Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
