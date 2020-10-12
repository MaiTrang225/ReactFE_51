// Giá trị ban đầu của state
const stateDefaut = {
  gioHang: [
    // {
    //   maSp: 1,
    //   tenSp: "Iphone",
    //   hinhAnh: "https://picsum.photos/50",
    //   soLuong: 1,
    //   giaBan: 1000,
    // },
  ],
};
// Hàm reducer trae về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // Xử lý cập nhật tại state
      let gioHangUpdate = [...state.gioHang];
      //  tìm sp có trong giỏ hàng hay ko
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGH);
      }
      // gán lại state cũ = giá trị mới tuơng đương việc setState lại components
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "Xoa_Gio_Hang": {
      let gioHangUpdate = [...state.gioHang];
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSPClick === action.maSPClick
      );
      if (index !== -1) {
        gioHangUpdate.splice(index, 1);
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHangUpdate = [...state.gioHang];
      // Tìm ra sp có mã ứng với sp trong giot hàng
      let spGioHang = gioHangUpdate.find((sp) => sp.maSP === action.maSP);
      if (spGioHang) {
        if (action.tangGiam) {
          spGioHang.soLuong += 1;
        } else {
          if (spGioHang.soLuong >1) {
            spGioHang.soLuong -= 1;
          }
        }
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
  }

  return { ...state };
};
export default BaiTapGioHangReducer;
