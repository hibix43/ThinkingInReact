import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input type="text" name="searchbar" value={props.filterText}/>
      <input type="checkbox" name="seachbar-checkbox" checked={props.inStockOnly}/>
      <label>Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
