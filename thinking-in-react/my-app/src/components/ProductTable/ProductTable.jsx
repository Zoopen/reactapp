import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow'
import ProductRow from '../ProductRow/ProductRow'

function ProductTable(props) {

    const {products, filterText, inStockOnly} = props;
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if(product.name.indexOf(filterText) === -1) {
            return;
        }
        if(inStockOnly && !product.stocked) {
            return;
        }
        if(product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                category={product.category}
                key={product.category} />
            )
        }
        rows.push(
            <ProductRow
            product={product}
            key={product.name} />
        )
        lastCategory = product.category;
    })

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
    )
}
export default ProductTable;