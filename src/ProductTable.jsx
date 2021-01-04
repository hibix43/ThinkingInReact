import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = (props) => {
  const productsByCategory = groupingProductsByCategory(props.products);
  const rows = convertProductsToRow(productsByCategory);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const groupingProductsByCategory = (products) => {
  const productsByCategory = {};
  products.forEach((element) => {
    const { category, ...data } = element;
    if (!Object.keys(productsByCategory).includes(category)) {
      productsByCategory[category] = [];
    }
    productsByCategory[category].push(data);
  });
  return productsByCategory;
};

const convertProductsToRow = (productsByCategory) => {
  return Object.keys(productsByCategory).map((categoryName, index) => {
    // 本来は key に id を指定する
    return [
      <ProductCategoryRow key={"category" + index} name={categoryName} />,
    ].concat(
      productsByCategory[categoryName].map((values, index) => {
        const { name, stocks, price } = values;
        return (
          <ProductRow
            key={categoryName + index}
            name={name}
            price={price}
            stocks={stocks}
          />
        );
      })
    );
  });
}

export default ProductTable;
