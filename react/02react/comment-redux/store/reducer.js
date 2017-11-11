
import * as types from './action-type';
let comments=localStorage.getItem('comments');
comments=comments ? JSON.parse(comments) : []
let initState={
  comments
}
export default function (state=initState,action) {
  switch (action.type) {
    //{type:ADD_COMMENT,payload:{id,username,content,createAt}}
    case types.ADD_COMMENT:
        let comments=[...state.comments,action.payload];
        localStorage.setItem('comments',JSON.stringify(comments))
        return {
          comments
        }
      break;
      //{type:DEL_COMMENT,payload:1}
    case types.DEL_COMMENT:
        let comments2=state.comments.filter((item)=>item.id!=action.payload);
        localStorage.setItem('comments',JSON.stringify(comments2))
        return {
          comments:comments2
        }
      break;
    default:
      return state;

  }
}
