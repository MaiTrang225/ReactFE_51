import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div className="card h-100 ">
            <img
              className="card-img-top"
              src="https://picsum.photos/700/400"
              alt
            />
            <div className="card-body">
              <h4 style={{ color: "#2890ff" }} classname="card-title">
                Items 1
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente esse necessitatibus neque.
              </p>
            </div>
            <div style={{ color: "#6e777f" }} class="card-footer">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
