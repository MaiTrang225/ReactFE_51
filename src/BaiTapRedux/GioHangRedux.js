import React, { Component } from "react";

import{connect} from 'react-redux';
class GioHangRedux extends Component {
  renderGioHang = () => {
    return 
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <td>Mã Sp</td>
            <td>Tên Sp</td>
            <td>Hình Ảnh</td>
            <td>Số lượng</td>
            <td>Đơn Giá</td>
            <td>Thành Tiền</td>
            <td>
              <button className="btn btn-danger">Xóa</button>
            </td>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}

// const mapStateToProps = (state)=>{
//   return{

//   }
// }
const mapStateToProps = (state)=>{
  return{
    gioHang:state.StateBaiTapGioHang.gioHang
  }
}
export default connect(mapStateToProps)(GioHangRedux);//Kết nối giữa gioHangReduxComponent vs reduxStore