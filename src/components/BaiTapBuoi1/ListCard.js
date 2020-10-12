import React, { Component } from "react";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

export default class ListCard extends Component {
  render() {
    return (
      <div class="container">
        <div className="row py-3">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card2 />
          </div>
          <div className="col-4">
            <Card3 />
          </div>
        </div>
        <div className="row py-3">
          <div className="col-4">
            <Card4 />
          </div>
          <div className="col-4">
            <Card5 />
          </div>
          <div className="col-4">
            <Card6 />
          </div>
        </div>
      </div>
    );
  }
}
