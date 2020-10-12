// Giá trị ban đầu của state
const stateDefaut = {
    gioHang:[ 
         {maSp:1, tenSp:'Iphone',hinhAnh:'https://picsum.photos/50',soLuong:1,donGia:1000}]
      
    }
// Hàm reducer trae về state của ứng dụng
const BaiTapGioHangReducer = (state=stateDefaut,action)=>{
    return{...state}
}
export default BaiTapGioHangReducer
