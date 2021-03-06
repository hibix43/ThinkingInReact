import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export type Product = {
  category: string
  price: string
  stocked: boolean
  name: string
};

// ({ products }) とすると index.tsx 同様に怒られる
const FilterableProductTable: React.FC<Product[]> = ( products ) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const onChangeFilterText = (e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)
  const onChangeInStockOnly = (e: React.ChangeEvent<HTMLInputElement>) => setInStockOnly(e.target.checked)

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={onChangeFilterText}
        setInStockOnly={onChangeInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
