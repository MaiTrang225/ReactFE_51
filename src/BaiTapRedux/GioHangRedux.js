import React, { Component } from "react";

import{connect} from 'react-redux';
class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang,index)=>{
      return <tr>
      <td>{spGioHang.maSP}</td>
      <td>{spGioHang.tenSP}</td>
      <td>
        <img src={spGioHang.hinhAnh} width={50}/>
      </td>
      <td><button onClick={()=>{this.props.tangGiamSoLuong(spGioHang.maSP,true)}}>+</button></td>
      <td>{spGioHang.soLuong}</td>
      
      <td><button onClick={()=>{this.props.tangGiamSoLuong(spGioHang.maSP,false)}}>-</button></td>
      <td>{spGioHang.giaBan}</td>
      <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
      <td><button onClick={()=>{
                this.props.xoaGioHang(spGioHang.maSP)
              }} className="btn btn-danger">Xóa</button></td>
    </tr>
    })
  };

  
  render() {
    return (
      <div>
      <table className="table">
        <thead>
          <tr>
            <td>Mã Sp</td>
            <td>Tên Sp</td>
            <td>Hình Ảnh</td>
            <td>Số lượng</td>
            <td>Đơn Giá</td>
            <td>Thành Tiền</td>
            
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
      gioHang:state.StateBaiTapGioHang.gioHang
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    xoaGioHang : (maSPClick)=>{
      console.log(maSPClick);
      const action = {
      type:'Xoa_Gio_Hang',
      maSPClick,
      }
      dispatch(action)
    },
    tangGiamSoLuong:(maSP, tangGiam)=>{
      // Tạo ra action
      const action={
        type:'TANG_GIAM_SO_LUONG',
        maSP,
        tangGiam
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux);//Kết nối giữa gioHangReduxComponent vs reduxStore