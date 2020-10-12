import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  // isLogin là thuộc tính của Class
  // true: Đã login => Hiện Name, avatar
  // false: Chưa login => hiện button login

  state = {
    isLogin: false,
  };

  isLogin = false; //=> Cách này sai vì render ko chạy lại

  // Phương thúc của Class
  handleLogin = () => {
    // Chạy lại
    this.setState({
      isLogin: true,
    });
  };

  renderLogin = () => {
    if (this.state.isLogin) {
      // Hiện tên người dùng
      return <p>Mai Trang</p>;
    } else {
      // Hiện nút button
      return <button onClick={this.handleLogin}>Login</button>;
    }
  };
  // Render là phương thức cập nhật giao diện
  render() {
    console.log("Run render");
    return (
      <div>
        <h2>Conditional And State</h2>
        {this.renderLogin()}
      </div>
    );
  }
}
