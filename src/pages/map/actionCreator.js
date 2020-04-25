import { GET_MAP_DATA } from './actionTypes';

export const loadMapData = (mapdatas) => {
  return  {
    type: GET_MAP_DATA,
    mapdatas
  }
}

export const loadMapDatasAsync = (dispatch) => {
  return () => {
    fetch('/mock/mapdata.json')
      .then(response => response.json())
      .then(result => {
        dispatch(loadMapData(result.data.mapdatas))
      })
  }
}