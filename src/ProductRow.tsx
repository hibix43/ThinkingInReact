import React from "react";

type Props = {
  name: string
  price: string
}

const ProductRow: React.FC<Props> = ({ name, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
