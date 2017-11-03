const createStore=() => {
  //状态
  let state;
  //监听事件数组
  let listeners=[];
  let getState=() =>state;
  let dispatch=() => {

  }
  let subscribe=(listener) => {
    listeners.push(listener)
    return () => {

    }
  }
  return {
    getState
  }
}

export {createStore}
