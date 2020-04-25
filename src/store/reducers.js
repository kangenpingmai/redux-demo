import { combineReducers } from 'redux'

import { reducer as cookbook } from 'pages/cookbook'
import {reducer as map} from  'pages/map'
import {reducer as  mycount} from 'pages/mycount'
export default combineReducers({
  cookbook,
  map,
  mycount
})