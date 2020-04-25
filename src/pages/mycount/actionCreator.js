import { GET_MYCOUNT_DATA } from './actionTypes';

export const loadMyData = (mydatas) => {
  return  {
    type: GET_MYCOUNT_DATA,
    mydatas
  }
}

export const loadMyDatasAsync = (dispatch) => {
  return () => {
    fetch('/mock/mapdata.json')
      .then(response => response.json())
      .then(result => {
        let obj = {
          test: 'recordID',
          data: result.data.mapdatas
        }
        dispatch(loadMyData(obj))
      })
  }
}
//dispatch记录一个数据放到store中，该记录得数据要再reducer中写初始值，在其他页面再引用