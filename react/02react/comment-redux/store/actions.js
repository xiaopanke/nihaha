//actionCreator action的创建者
import * as types from './action-type';
export default{
  addComment(comment){
    return {
      type:types.ADD_COMMENT,
      payload:comment
    }
  },
  delComment(id){
    return {
      type:types.DEL_COMMENT,
      payload:id
    }
  }
}
