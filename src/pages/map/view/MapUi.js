import React, {Component} from 'react';


export default class MapUi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {mapdatas} = this.props;
    return (
      <div>
        {mapdatas && Object.keys(mapdatas).map((value) => {
          return <div key={value}>{value}</div>
        })}
      </div>
    );
  };
};