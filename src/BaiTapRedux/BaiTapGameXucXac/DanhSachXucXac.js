import React, { Component } from "react";
import { connect } from "react-redux";
class DanhSachXucXac extends Component {
  render() {
    return (
      <div className="row mt-5 text-center">
        <div className="col-3">
          <button
            className="p-5 btn btn-success"
            onClick={() => {
              this.props.datCuoc('Tài');
            }}
          >
            <span className="display-4">Tài</span>
          </button>
        </div>
        <div className="col-6">
          {this.props.mangXucXac.map((xucXac, index) => {
            return (
              <img
                key={index}
                className="m-5"
                src={xucXac.hinhAnh}
                style={{ width: 50 }}
              />
            );
          })}
        </div>
        <div className="col-3">
          <button className="p-5 btn btn-danger" onClick={() => {
              this.props.datCuoc('Xỉu');
            }}>
            <span className="display-4">Xỉu</span>
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      // Tạo ra action
      const action ={
        type :'DATCUOC',
        taiXiu
      }
      // Dùng hàm dispatch đưa dữ liệu lên reducer
      dispatch(action);
    },
  };
};

// Định nghĩa hàm lầy từ dữ liệu reducer

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(DanhSachXucXac);
