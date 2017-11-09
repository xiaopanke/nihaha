import {createStore,combineReducers} from 'redux';
//combineReducers合并reducer
import counter from './reducers/counter';
import todos from './reducers/todos';
let reducer=combineReducers({
  counter,
  todos
})

let store=createStore(reducer)
export default store;
