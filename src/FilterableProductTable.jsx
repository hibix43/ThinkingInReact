import React, {useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = props => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly}/>
      <ProductTable products={props.products} filterText={filterText} inStockOnly={inStockOnly}/>
    </div>
  );
};

export default FilterableProductTable;
