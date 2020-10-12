import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  // Props dùng để truyền dữ liệu giữa các component
  state = {
    ten: "Mai Trang",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>Props</h2>
        <FunctionProps
          // Cách truyền Props
          hoVaTen={this.state.ten}
          lopHoc={this.state.lop}
        />
        <ClassProps hoVaTen={this.state.ten} lopHoc={this.state.lop} />
      </div>
    );
  }
}
