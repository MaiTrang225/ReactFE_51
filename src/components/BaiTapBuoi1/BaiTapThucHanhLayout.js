import React, { Component } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import HeaderBT1 from "./HeaderBT1";
import ListCard from "./ListCard";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <HeaderBT1 />
        <Carousel />
        <ListCard />
        <Footer />
      </div>
    );
  }
}
