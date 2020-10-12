/**
 * Các bước thực hiện
 * 1/ Dàn layout
 * 2/ Xác định data thay đổi và lưu nó vào trong State [ state = {
    imgCar: "./img/car/products/steel-car.jpg",
  };]
 * 3/ Lấy data trong State đi binding  ra js [{this.state.imgCar}]
 * 4/ Bắt sự kiện click cho các button chọn màu
 * 5/ Cập nhập lại giá trị trong State
 */
import React, { Component } from "react";

export default class BaiTapDoiMauXe extends Component {
  state = {
    imgCar: "./img/car/products/steel-car.jpg",
  };

  handleChangeColor = (imgCar) => {
    console.log(imgCar);
    this.setState({
      //   imgCar: imgCar, Cách này ko sai nhưng dài dòng
      // Cách dưới gọn và đẹp code hơn
      imgCar,
    });
  };
  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <button
              className="btn"
              onClick={() => {
                this.handleChangeColor("./img/car/products/black-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-black.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                this.handleChangeColor("./img/car/products/red-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                this.handleChangeColor("./img/car/products/silver-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                this.handleChangeColor("./img/car/products/steel-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="car mt-2">
            <img className="img-thumbnail" src={this.state.imgCar} alt="hinh" />
          </div>
        </div>
      </section>
    );
  }
}
