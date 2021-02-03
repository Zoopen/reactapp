import React from "react";
class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this)
    }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }
  handleInStockOnlyChange(e) {
      this.props.onInStockOnlyChange(e.target.checked)
  }

  render() {
    const { filterText, inStockOnly } = this.props;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <label>
            <input type="checkbox"
              checked={inStockOnly}
              onChange={this.handleInStockOnlyChange} /> Only show products
            in stock
          </label>
        </p>
      </form>
    );
  }
}

export default SearchBar;
