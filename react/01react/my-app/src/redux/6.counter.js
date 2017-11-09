import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import store from './store/index.js';
import * as types from './store/action-types'


export default class Counter extends Component{
  constructor(){
    super();
    //在初始化的时候，把仓库中的状态拿过来存放到自己的内部状态中
    this.state={number:store.getState().counter}
  }
  //在组件渲染完成后订阅仓库的状态变化时间
  componentDidMount(){
    console.log('componentDidMount');
    store.subscribe(() => {
      this.setState({number:store.getState().counter});
    })
  }
  render(){
    return(
      <div>
        <input type="text" ref={(input)=>this.input=input} />
        <p>{this.state.number}</p>
        <p>{store.getState().counter}</p>
        <button onClick={() =>store.dispatch(add(this.input.value || 1))}>+</button>
        <button onClick={() =>store.dispatch(sub(this.input.value || 1))}>-</button>
      </div>
    )
  }
}
function add(payload) {
  return{
    type:types.ADD,
    payload,
  }
}
function sub(payload) {
  return{
    type:types.SUB,
    payload,
  }
}
