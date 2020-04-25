import React, { Component } from 'react';


export default class MapUi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    const { mydatas } = this.props;
    return (
      <div>
        {mydatas && mydatas.data && Object.keys(mydatas.data).map((value) => {
          return <div key={value}>{value}</div>
        })}
      </div>
    );
  };
};