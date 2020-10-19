import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    console.log("contructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() {
    return (
      <div>
        <header>Header Component</header>
        <h1>LifeCycle number: {this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +
        </button>
        {<ChildComponent number={this.state.number}/>}
       {/* {this.state.number <3 ? <ChildComponent />: ''}  */}
      </div>
    );
  }

  componentDidMount() {
    // Gọi API tại didmount
    console.log("componentDidmount");
  }
//   Hàm này chạy khi setState hoặc thay đổi props
  componentDidUpdate (){
      console.log("ComponentDidUpdate")
  }
}
