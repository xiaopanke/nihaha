import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/FilterableProductTable.js'
let products=require('./products.js')

ReactDOM.render(
  <FilterableProductTable products={products} />,
  document.querySelector('#root')
)
