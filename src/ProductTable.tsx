import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import {Product} from "./FilterableProductTable";

type Props = {
  products: Product[]
  filterText: string
  inStockOnly: boolean
}

const ProductTable: React.FC<Props> = ({ products, filterText, inStockOnly }) => {
  const productsByCategory = groupingProductsByCategory(
    products,
    filterText,
    inStockOnly
  );
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

type ProductsByCategory = {[key: string]: Omit<Product, "category">[]};

const groupingProductsByCategory = (products: Product[], filterText: string, inStockOnly: boolean) => {
  const productsByCategory: ProductsByCategory = {};
  products.forEach((element) => {
    const { category, ...data } = element;
    if (!Object.keys(productsByCategory).includes(category)) {
      productsByCategory[category] = [];
    }
    if (
      data.name.includes(filterText) &&
      (!inStockOnly || (inStockOnly && data.stocked))
    ) {
      productsByCategory[category].push(data);
    }
  });
  return productsByCategory;
};

const convertProductsToRow = (productsByCategory: ProductsByCategory) => {
  return Object.keys(productsByCategory).map((categoryName, index) => {
    // 本来は key に id を指定する
    return [
      <ProductCategoryRow key={"category" + index} name={categoryName} />,
    ].concat(
      productsByCategory[categoryName].map((values, index) => {
        const { name, price } = values;
        return (
          <ProductRow
            key={categoryName + index}
            name={name}
            price={price}
          />
        );
      })
    );
  });
};

export default ProductTable;
