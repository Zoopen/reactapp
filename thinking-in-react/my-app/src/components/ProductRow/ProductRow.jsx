function ProductRow(props) {
  const { product } = props;
  return (
    <tr>
      <td style={{ color: product.stocked ? "" : "red" }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
export default ProductRow;
