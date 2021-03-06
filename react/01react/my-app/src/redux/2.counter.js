import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore}  from 'redux' ;

const ADD='ADD';
const SUB='SUB';
let reducer=(state=0,action) => {
  switch (action.type) {
    case ADD:
      return state+parseFloat(action.payload);
      break;
   case SUB:
        return state-parseFloat(action.payload);
        break;
    default:
      return state;
      break;

  }
}

let store=createStore(reducer)

class Counter extends Component{
  constructor(){
    super();
    //在初始化的时候，把仓库中的状态拿过来存放到自己的内部状态中
    this.state={number:store.getState()}
  }
  //在组件渲染完成后订阅仓库的状态变化时间
  componentDidMount(){
    console.log('componentDidMount');
    store.subscribe(() => {
      this.setState({number:store.getState()});
    })
  }
  render(){
    return(
      <div>
        <input type="text" ref={(input)=>this.input=input} />
        <p>{this.state.number}</p>
        <p>{store.getState()}</p>
        <button onClick={() =>store.dispatch(add(this.input.value))}>+</button>
        <button onClick={() =>store.dispatch(sub(this.input.value))}>-</button>
      </div>
    )
  }
}
function add(payload) {
  return{
    type:'ADD',
    payload,
  }
}
function sub(payload) {
  return{
    type:'SUB',
    payload,
  }
}
ReactDOM.render(<div>
    <Counter />
    <Counter />
  </div>,document.querySelector('#root'))
