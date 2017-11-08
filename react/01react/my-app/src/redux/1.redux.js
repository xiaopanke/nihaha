/*
派发动作dispatch(action)
仓库store
处理器 reducer
订阅 subscribe
*/
//初始状态
let initState=0;
//创建仓库
let createStore=(reducer) => {
  //仓库里有状态
  let state;
  //此数组中存放着所以的监听函数
  let listeners=[];
  //获取仓库中的状态
  let getState=() => state;
  //用来让外界给仓库派发动作的

  //action是一个普通的js对象，必须要有一个type属性
  let dispatch=(action) => {
    //仓库会把得到老状态和动作传给reducer得到新的状态
    state=reducer(state,action)
  }
  //订阅仓库中状态变化事件
  let subscribe=(listener) => {
      listeners.push(listener)
  }
  //
  dispatch({})
  return { //这个就是我们的仓库啦
    getState,
    dispatch,
    subscribe
  }
}
const ADD='ADD';
const SUB='SUB';
//处理器，通过老的状态和动作对象，得到新的状态对象
let reducer=(state=initState,action) => {
  switch (action.type) {
    case ADD:
      return state+1;
      break;
    case SUB:
        return state-1;
        break;
    default:
      return state

  }
}
let store=createStore(reducer)
console.log(store.getState());
store.dispatch({type:ADD})
store.dispatch({type:ADD})
store.dispatch({type:SUB})
console.log(store.getState());
