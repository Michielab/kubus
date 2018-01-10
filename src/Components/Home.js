import React, { Component } from "react";
import Kubus from "./Kubus";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideValue: 1,
      rotateValue: 1,
      front: [[200, 400], [200, 600], [400, 600], [400, 400]]
    };
  }
  adjustSize = event => {
    var x = parseInt(event.target.value);
    console.log(typeof x);
    this.setState({
      slideValue: event.target.value,
      front: [[200, 400], [200, 600 + x], [400 + x, 600 + x], [400 + x, 400]]
      // back: [[300, 400], [300, 600 + x, 500 + x, 600 + x, 500 + x, 400]]
    });
  };

  rotate = event => {
    this.rotateX(95);
    // var d = Math.hypot(y - meanY, x - meanX);
    // console.log(array);
    // var y = parseInt(event.target.value);
    // console.log(typeof y);
    // this.setState({
    //   slideValue: event.target.value,
    //   rotateValue: y
    //   // front: [[200, 400], [200, 600, 400, 600, 400, 400]]
    // });
  };
  rotateX = radius => {
    var meanX =
      (this.state.front[0][0] +
        this.state.front[1][0] +
        this.state.front[2][0] +
        this.state.front[3][0]) /
      this.state.front.length;
    var meanY =
      (this.state.front[0][1] +
        this.state.front[1][1] +
        this.state.front[2][1] +
        this.state.front[3][1]) /
      this.state.front.length;

    var front = this.state.front.map((point, index) => {
      var x = point[0] - meanX;
      var y = point[1] - meanY;
      var d = Math.hypot(point[1] - meanY, point[0] - meanX);
      var angle = Math.atan2(point[1] - meanY, point[0] - meanX) + radius;
      return [meanX + d * Math.cos(angle), meanY + d * Math.sin(angle)];
    });
    this.setState({ front: front });
  };
  render() {
    return (
      <div className="home-container">
        <svg
          view-box="0 0 800 800"
          width="800"
          height="800"
          className="kubus-container"
        >
          <Kubus
            vertices={this.state.front}
            rotateValue={this.state.rotateValue}
            className="front"
          >
            front
          </Kubus>
        </svg>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="300"
            value={this.state.slideValue}
            className="slider"
            id="myRange"
            onChange={this.adjustSize}
          />
        </div>
        <div className="slidecontainer">
          <input
            type="range"
            min="0"
            max="360"
            value={this.state.rotateValue}
            className="slider"
            id="myRangeRotate"
            onChange={this.rotate}
          />
        </div>
      </div>
    );
  }
}

export default Home;
