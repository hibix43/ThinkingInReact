import React from "react";

const ProductCategoryRow = (props) => {
  return (
    <tr>
      <th colSpan="2">{props.name}</th>
    </tr>
  );
};

export default ProductCategoryRow;
