import React, { Component } from "react";

export default class SanPhamGHRedux extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.spGioHang.maSP}</td>
        <td>{this.props.spGioHang.tenSP}</td>
        <td></td>
        <td>
          <img src={this.props.hinhAnh} width={50}/>
        </td>
        <td>{this.props.spGioHang.soLuong}</td>
        <td>{this.props.spGioHang.giaBan}</td>
        <td>{this.props.spGioHang.soLuong * this.props.spGioHang.giaBan}</td>
      </tr>
    )
  }
}
