import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>ClassProps</h3>
        <p>Tên: {this.props.hoVaTen}</p>
        <p>Tên: {this.props.lopHoc}</p>
      </div>
    );
  }
}
