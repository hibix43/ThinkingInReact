import React from "react";

type Props = {
  filterText: string
  inStockOnly: boolean
  setFilterText: React.Dispatch<React.SetStateAction<string>>
  setInStockOnly: React.Dispatch<React.SetStateAction<boolean>>
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
        onChange={(e) => setFilterText(e.target.value)}
      />
      <input
        type="checkbox"
        name="seachbar-checkbox"
        checked={inStockOnly}
        onChange={(e) => setInStockOnly(e.target.checked)}
      />
      <label>Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
