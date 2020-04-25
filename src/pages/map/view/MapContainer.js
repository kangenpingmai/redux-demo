import React, { Component } from 'react'
import {loadMapDatasAsync} from '../actionCreator'
import {connect} from "react-redux";
import MapUi from './MapUi'
const mapState = (state) => {
  return {
    mapdatas: state.map.mapdatas,
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadCategories () {
      dispatch(loadMapDatasAsync(dispatch))
    }
  }
}

class MapContainer extends Component {
    render () {
        return (
          <h3>react hooks</h3>
        );
    }


    componentWillMount() {
      this.props.loadCategories();
    }
}

export default connect(mapState, mapDispatch)(MapContainer);