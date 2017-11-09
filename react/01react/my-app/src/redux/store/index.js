import {createStore,combineReducers} from 'redux';
//combineReducers合并reducer
import counter from './reducers/counter';
import todos from './reducers/todos';
console.log(counter);
console.log(todos);
let reducer=combineReducers({
  counter,
  todos
})
console.log(reducer);

let store=createStore(reducer)
export default store;
