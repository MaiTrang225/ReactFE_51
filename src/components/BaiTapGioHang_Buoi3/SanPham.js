import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    const currentProduct = this.props.product;
    this.props.xuLyChiTiet(currentProduct);
  };
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <img onClick={this.handleDetail}
          className="card-img-top"
          src={this.props.product.hinhAnh}
          alt="hinhDep"
        />
        
      </div>
    );
  }
}
