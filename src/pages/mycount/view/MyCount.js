import React, { Component } from 'react'
import { loadMyDatasAsync } from '../actionCreator'
import { connect } from "react-redux";
import MyUi from "./MyUi";
import { log } from 'util';

const mapState = (state) => {
  return {
    mydatas: state.mycount.mydatas,
  }
}

const mapDispatch = (dispatch) => {
  return {
    //定义loadCategories函数
    loadCategories () {
      dispatch(loadMyDatasAsync(dispatch))
    }
  }
}

class MyContainer extends Component {
  render () {
    return (
      <MyUi {...this.props} />
    );
  }

  componentWillMount () {
    this.props.loadCategories();
  }

}
export default connect(mapState, mapDispatch)(MyContainer);