
import * as types from '../action-types'
let initState={todos:[]}

let reducer=(state=initState,action) => {
  console.log(action.type);
  switch (action.type) {
    case types.ADD_TODO:
    //payload是新的todo字符串
      return {todos:[...state.todos,action.payload]}
      break;
    case types.DEL_TODO:
      //将要被删除的索引
      return {todos:state.todos.filter((item,index)=>index!==action.index)}
      break;
    default:
      return state;

  }
}
export default reducer
