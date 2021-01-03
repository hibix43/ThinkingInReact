import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = (props) => {
  const productsByCategory = groupingProductsByCategory(props.products);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow />
        <ProductRow />
      </tbody>
    </table>
  );
};

const groupingProductsByCategory = (products) => {
  const productsByCategory = {};  
  products.map((element) => {
    const { category, ...data } = element;
    if (!Object.keys(productsByCategory).includes(category)) {
        productsByCategory[category] = [];
    }
    productsByCategory[category].push(data);
  });
  return productsByCategory
};

export default ProductTable;
