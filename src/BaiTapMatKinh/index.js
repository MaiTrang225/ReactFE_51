import React, { Component } from "react";
import danhSachKinh from "./data.json";
import ListKinh from "./ListKinh";

export default class BaiTapMatKinh extends Component {
  state = {
    tryIt: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      image: "./img/glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  handleTryIt = (tryIt) => {
    this.setState({
      tryIt,
    });
  };

  renderListKinh = () => {
    return danhSachKinh.map((sanPham, index) => {
      return (
        <div className="col-2" key={index}>
          <ListKinh product={sanPham} tryIt={this.handleTryIt} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./img/glassesImage/background.jpg",
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundSize: "cover", 
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "rgb(0, 0, 0,.3)",
          }}
        >
          <h4
            style={{ background: "rgb(0, 0, 0,.4)", color: "white",marginBlockEnd:"0" }}
            className="display-5 text-center py-4"
          >
            TRY GLASSES APP ONLINE
          </h4>

          <div className="container text-center py-5">
            <div className="row mx-5">
              {/* imgLeft */}
              <div
                className="col-6  d-flex"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="./img/glassesImage/model.jpg"
                  alt="hinh"
                  style={{
                    width: "40%",
                    height: "100%",
                    alignItems: "center",
                  }}
                />
                {/* imgItem */}
                <div style={{ position: "absolute" }}>
                  <img
                   src={this.state.tryIt.image}
                    style={{
                      width: "115px",
                      height: "40px",
                      marginBottom: "71px",
                    }}
                  />
                </div>

                {/* itemInfo */}
                <div
                  className="display-5"
                  style={{
                    backgroundColor: "rgb(249, 105, 3, .3)",
                    position: "absolute",
                    color: "white",
                    width: "38%",
                    height: "30%",
                    textAlign: "left",
                    paddingLeft: "3px",
                    marginTop: "163px",
                  }}
                >
                  <h6 style={{ color: "#8888cc" }}>{this.state.tryIt.name}</h6>
                  <p style={{ fontSize: "10px", fontWeight: "bold", }}>
                  {this.state.tryIt.desc}
                  </p>
                </div>
              </div>

              {/* imgRight */}
              <div className="col-6">
                <img
                  src="./img/glassesImage/model.jpg"
                  alt="hinh"
                  style={{
                    width: "40%",
                    height: "100%",
                    alignItems: "center",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="container px-5 " style={{alignItems:"center"}}> 
                <div className="row display-4 pb-3 "
                style={{backgroundColor:"white",width:"75%", margin:"auto" }}>{this.renderListKinh()}</div>
          </div>
        </div>
      </div>
    );
  }
}
