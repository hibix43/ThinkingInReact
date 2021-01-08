import React from "react";

type Props = {
  filterText: string
  inStockOnly: boolean
  setFilterText: (e: React.ChangeEvent<HTMLInputElement>) => void
  setInStockOnly: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: React.FC<Props> = ({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly,
}) => {
  return (
    <div>
      <input
        type="text"
        name="searchbar"
        value={filterText}
        onChange={setFilterText}
      />
      <input
        type="checkbox"
        name="seachbar-checkbox"
        checked={inStockOnly}
        onChange={setInStockOnly}
      />
      <label>Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
