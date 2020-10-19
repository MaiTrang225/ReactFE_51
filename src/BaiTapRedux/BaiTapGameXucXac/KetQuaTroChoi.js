import React, { Component } from "react";

import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  renderKetQua = () => {
    let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
      return (tongDiemXX += xucXac.so);
    }, 0);

    let ketQua = tongDiem > 9 ? "Tài" : "Xỉu";
    return (
      <div>
        {" "}
        <span className="display-4 text-dark">
          {tongDiem} -{ketQua}
        </span>
      </div>
    );
  };

  render() {
    return (
      <div className="container text-center mt-5">
        <div className="display-4">{this.renderKetQua()}</div>
        <div className="display-4">
          Bạn chọn: <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div className="display-4">
          Số bàn thắng:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi:{" "}
          <span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
        <div className="text-center">
          <button
            className="btn btn-success p-2 mt-2"
            onClick={() => {
              this.props.playGame();
            }}
          >
            <span style={{ fontSize: 20 }}>PLAY GAME</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      // Set hàm setInterval để thực thi liên tục theo thời gian, sau khi đáp ứng điều kiện bạn đặt ra thì hàm clearInterval sẽ dừng lại
      let n = 0;
      let randomXucXac = setInterval(() => {
        const action = {
          type: "RANDOM_XUC_XAC",
        };
        dispatch(action);
        n++;
        if (n === 30) {
          //   Dừng hàm
          clearInterval(randomXucXac);

          //   Dispatch action xử lý kết quả
          const actionXLKQ = {
            type: "END_GAME",
          };
          dispatch(actionXLKQ);
        }
      }, 20);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    banChon: state.stateBaiTapGameXucXac.banChon,
    soBanThang: state.stateBaiTapGameXucXac.soBanThang,
    tongSoBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
