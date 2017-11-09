
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Todos from   './7.todo.js';
import Counter from   './6.counter.js';
class Page extends React.Component{
  render(){
    return(
      <div>
        <Todos />
        <Counter />
      </div>
    )
  }
}
ReactDOM.render(<Page />,document.querySelector('#root'))
