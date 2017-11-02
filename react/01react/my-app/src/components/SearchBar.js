import React,{Component} from 'react';
export default class SearchBar extends Component{
    render(){
        return (
            <div>
              <input type="text" value={this.props.filterText} onChange={this.props.handleFilter} /> <br />
              <label><input type="checkbox" checked={this.props.inStockOnly} onChange={this.props.handleStock} />Only show products in stock</label>
            </div>
        )
    }
}
