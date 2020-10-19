/**
 * Các bước thực hiện
 * 1. Dàn layout
 * 2. Xác định dữ liệu thay đổi và lưu vào state
 * 3. Lấy data trong state đi binding ra jsx
 * 4. Duyệt mảng render danh sách sản phẩm
 * 5. Xây dựng chức năng xem chi tiết
 * 6. Xây dựng chức năng thêm vào giỏ hàng, tăng, giảm, hiển thị tổng số sp
 */
import React, { Component } from "react";
import danhSachSanPham from "./data.json"; //Import data.json
import SanPham from "./SanPham";
export default class BaiTapGioHang extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

  };

  
  handleSanPhamChiTiet = (sanPhamChiTiet) => {
    this.setState({
      //   sanPhamChiTiet: sanPhamChiTiet, //State ở đâu thì xét state ở đó
      sanPhamChiTiet,
    });
  };

  renderDanhSachSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col" key={index}>
          <SanPham
            product={sanPham}
            xuLyChiTiet={this.handleSanPhamChiTiet}
           
          />
        </div>
      );
    });
  };
  
  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>

          <div className="container danh-sach-san-pham">
            <div className="row">{this.renderDanhSachSanPham()}</div>
          </div>
         
          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.state.sanPhamChiTiet.hinhAnh}
                alt="hinhDep"
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.state.sanPhamChiTiet.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.sanPhamChiTiet.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
