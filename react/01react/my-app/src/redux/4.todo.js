import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import {createStore} from 'redux';

const ADD_TODO='ADD_TODO';
const DEL_TODO='DEL_TODO';

let initState={todos:[]}

let reducer=(state=initState,action) => {

  switch (action.type) {
    case ADD_TODO:
    //payload是新的todo字符串
      return {todos:[...state.todos,action.payload]}
      break;
    case DEL_TODO:
      //将要被删除的索引
      return {todos:state.todos.filter((item,index)=>index!==action.index)}
      break;
    default:
      return state;

  }
}

let store=createStore(reducer);
//store有三个属性 {getState,dispatch,subscribe}

export default class Todos extends Component{
  constructor(){
    super();

    this.state={todos:store.getState().todos}
  }
  componentDidMount(){
    this.unSubscribe=store.subscribe(() => {
      this.setState({
        todos:store.getState().todos
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
      store.dispatch({type:ADD_TODO,payload})
    }
  }
  xixi=(index) => {
    store.dispatch({type:DEL_TODO,index})
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
