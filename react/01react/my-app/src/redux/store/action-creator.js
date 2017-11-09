import {bindActionCreators} from 'redux'
import * as types from './action-types';
import store from './index'
let dispatch=store.store

let actionCreators={
  add(payload) {
    return{
      type:types.ADD,
      payload,
    }
  },
  sub(payload) {
    return{
      type:types.SUB,
      payload,
    }
  }
}
export default bindActionCreators(actionCreators,dispatch)
