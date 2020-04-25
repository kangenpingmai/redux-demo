import { GET_MYCOUNT_DATA } from './actionTypes';

const defaultState = {
  mydatas: {}
}

export default (state=defaultState, action) => {
  if (action.type === GET_MYCOUNT_DATA) {
    return {
      ...state,
      mydatas: {...state.mydatas, ...action.mydatas}
    }
  }

  return state;
}