import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'

export default class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    handleFilterTextChange = (filterText) => {
        this.setState({
            filterText: filterText
        })
    }
    handleInStockOnlyChange = (inStockOnly) => {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    
    render() {
        return (
            <div>
                <SearchBar
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange}
                onInStockOnlyChange={this.handleInStockOnlyChange} />
                <ProductTable
                products={this.props.products}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly} />
            </div>
        )
    }
}