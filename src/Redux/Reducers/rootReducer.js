// File khai báo tất cả các State trong của ứng dụng
import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapGameXucXacReducer from "./BaiTapGameXucXacReducer"

// State
export const rootReducer = combineReducers({
  // Nơi khai báo các state theo từng nghiệp vụ
  StateBaiTapGioHang: BaiTapGioHangReducer,
  
  stateBaiTapGameXucXac: BaiTapGameXucXacReducer
});
