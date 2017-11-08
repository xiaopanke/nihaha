import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {createStore}  from 'redux' ;

class Counter extends Component{
  render(){
    return(
      <div>
        <p></p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter />,document.querySelector('#root'))
