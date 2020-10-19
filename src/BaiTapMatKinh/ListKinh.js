import React, { Component } from 'react'

export default class ListKinh extends Component {
  handleDetail=()=>{
    const currentProduct = this.props.product;
    this.props.tryIt(currentProduct);
  };
  render() {
    return (
      <div className=""> 
      <img onClick={this.handleDetail}
          className="card-img-top" style={{border:"1px solid #c1baba"}} src={this.props.product.image} alt="hinh"/> 
      </div>
    )
  }
}
