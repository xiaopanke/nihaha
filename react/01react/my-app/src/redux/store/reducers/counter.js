
import * as types from '../action-types';
let reducer=(state=0,action) => {
  switch (action.type) {
    case types.ADD:
      return state+parseFloat(action.payload);
      break;
   case types.SUB:
        return state-parseFloat(action.payload);
        break;
    default:
      return state;
      break;

  }
}

export default reducer
