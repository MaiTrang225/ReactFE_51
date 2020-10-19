import React, { Component } from "react";
import FromComponent from "./FormComponent";

export default class DanhSachNguoiDung extends Component {
  render() {
    return (
      <div className="container">
        <FromComponent />
        <table className="table">
          <thead>
            <tr>
              <th>Mã Người Dùng</th>
              <th>Tên Người Dùng</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
