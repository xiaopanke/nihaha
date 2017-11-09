import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import * as types from './store/action-types';
import store from './store/index.js';
export default class Todos extends Component{
  constructor(){
    super();

    this.state={todos:store.getState().todos.todos}
  }
  componentDidMount(){
    this.unSubscribe=store.subscribe(() => {
      this.setState({
        todos:store.getState().todos.todos
      })
    })

  }
  componentWillUnmount(){
    this.unSubscribe();//取消订阅
  }
  haha=(event) => {
    let keyCode=event.keyCode;
    if(keyCode==13){
      let payload=event.target.value;
      store.dispatch({type:types.ADD_TODO,payload})
    }
  }
  xixi=(index) => {
    store.dispatch({type:types.DEL_TODO,index})
  }
  render(){
    return(
      <div>
        <input type="text" onKeyDown={this.haha} />
        <ul>
          {
            this.state.todos.map((item,index) => (
              <li key={index}>{item}
                <button onClick={this.xixi.bind(this,index)}>删除</button>
                <button onClick={()=>this.xixi(index)}>删除</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
