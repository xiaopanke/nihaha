import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import actions from './store/action-creator'


export default class Counter extends Component{
  constructor(){
    super();
    //在初始化的时候，把仓库中的状态拿过来存放到自己的内部状态中
    console.log(store.getState().counter);
    this.state={number:store.getState().counter.number}
  }
  //在组件渲染完成后订阅仓库的状态变化时间
  componentDidMount(){
    console.log('componentDidMount');
    store.subscribe(() => {
      this.setState({number:store.getState().counter.number});
    })
  }
  render(){
    return(
      <div>
        <input type="text" ref={(input)=>this.input=input} />
        <p>{this.state.number}</p>
        <p>{store.getState().counter}</p>
        <button
        onClick={()=>actions.add(this.input.value || 1)}
        >+</button>
        <button onClick={()=>actions.sub(this.input.value || 1)}>-</button>
      </div>
    )
  }
}
