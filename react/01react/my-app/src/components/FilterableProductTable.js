import React,{Component} from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
export default class FilterableProductTable extends Component{
    constructor(){
      super();
      this.state = {filterText: '', inStockOnly: false}
    }
    render(){
        return (
            <div>
              <SearchBar />
              <ProductTable />
            </div>
        )
    }
}
