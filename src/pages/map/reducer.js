import { GET_MAP_DATA } from './actionTypes';

const defaultState = {
  mapdatas: {}
}

export default (state=defaultState, action) => {
  if (action.type === GET_MAP_DATA) {
    return {
      ...state,
      mapdatas: {...state.mapdatas, ...action.mapdatas}
    }
  }

  return state;
}