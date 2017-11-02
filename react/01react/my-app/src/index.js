import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/FilterableProductTable.js'
let products=require('./products.js')
console.log(products);

ReactDOM.render(
  <FilterableProductTable />,
  document.querySelector('#root')
)
