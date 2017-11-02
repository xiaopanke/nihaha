import React,{Component} from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
export default class FilterableProductTable extends Component{
    constructor(){
      super();
      this.state = {filterText:'',inStockOnly: false}
    }
    handleFilter=(event) => {
        this.setState({
          filterText:event.target.value
        })
    }
    handleStock=(event) => {
      this.setState({
        inStockOnly:event.target.checked
      })
    }
    render(){
        return (
            <div>
              <SearchBar
              handleFilter={this.handleFilter}
              handleStock={this.handleStock}
              filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
              <ProductTable
              products={this.props.products}
              filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}  />
            </div>
        )
    }
}
