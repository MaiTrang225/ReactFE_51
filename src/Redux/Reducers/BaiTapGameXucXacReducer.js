// State của bt game xúc xắc
const stateDefault = {
  banChon: "Tài",
  mangXucXac: [
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DATCUOC": {
      state.banChon = action.taiXiu;
      return { ...state };
    }
    case "RANDOM_XUC_XAC": {
      // Xử lý tạo ra 3 con xúc xắc ngẫu nhuên gán lại cho mangXucXac
      let mangXucXacNgauNhien = [];
      for (var i = 0; i < 3; i++) {
        const soNgauNhien = Math.floor(Math.random() * 6 + 1);
        // từ xúc xắc ngẫu nhiên tạo ra xúc xắc ngẫu nhiên
        const xucXacNgauNhien = {
          so: soNgauNhien,
          hinhAnh: `./img/BaiTapGameXucXac/${soNgauNhien}.png`,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      // TÍnh tổng điểm các số trong mangXucXac
      let tongDiem = state.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
        return (tongDiemXX += xucXac.so);
      }, 0);
      if (
        (tongDiem > 9 && state.banChon === "Tài") ||
        (tongDiem <= 9 && state.banChon === "Xỉu")
      ) {
        state.soBanThang += 1;
      }
    }
  }
  return { ...state };
};

export default BaiTapGameXucXacReducer;
