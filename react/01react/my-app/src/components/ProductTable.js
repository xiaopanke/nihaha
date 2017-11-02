import React,{Component} from 'react';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
export default class ProductTable extends Component{

    render(){
        let rows=[];
        let lastcategory;
        console.log(this.props.products)
        for (var i = 0; i < this.props.products.length; i++) {
          let product=this.props.products[i];
          if(this.props.filterText && product.name.indexOf(this.props.filterText)==-1)
          continue;
          if(this.props.inStockOnly && !product.stocked)
          continue;
          if(!lastcategory || lastcategory!=product.category){
            rows.push(<tr><td colSpan={2} style={{fontWeight:'bold'}}>{product.category}</td></tr>)
            lastcategory=product.category
          }
          rows.push(<tr key={i}><td style={{color:(product.stocked ? '#000' : 'red')}}>{product.name}</td><td style={{color:(product.stocked ? '#000' : 'red')}}>{product.price}</td></tr>)
        }
        return (
            <table>
              <thead>
                <tr>
                  <th>商品名称</th>
                  <th>商品价格</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
        )
    }
}
