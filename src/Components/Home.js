import React, { Component } from "react";
import Kubus from "./Kubus";
import * as FontAwesome from "react-icons/lib/fa";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideValue: 1,
      rotateValue: 1,
      rotateValueX: 1,
      front: [
        [200, 400, 400],
        [200, 600, 400],
        [400, 600, 400],
        [400, 400, 400],
        [200, 400, 600],
        [200, 600, 600],
        [400, 600, 600],
        [400, 400, 600]
      ]
    };
  }
  adjustSize = event => {
    var x = parseInt(event.target.value);
    this.setState({
      slideValue: event.target.value,
      front: [
        [200, 400, 400],
        [200, 600 + x, 400],
        [400 + x, 600 + x, 400],
        [400 + x, 400, 400],
        [200, 400, 600 + x],
        [200, 600 + x, 600 + x],
        [400 + x, 600 + x, 600 + x],
        [400 + x, 400, 600 + x]
      ]
    });
  };

  rotate = event => {
    this.rotateY(20);
  };

  rotateY = radians => {
    var meanY =
      (this.state.front[0][1] +
        this.state.front[1][1] +
        this.state.front[2][1] +
        this.state.front[3][1] +
        this.state.front[4][1] +
        this.state.front[5][1] +
        this.state.front[6][1] +
        this.state.front[7][1]) /
      this.state.front.length;

    var meanZ =
      (this.state.front[0][2] +
        this.state.front[1][2] +
        this.state.front[2][2] +
        this.state.front[3][2] +
        this.state.front[4][2] +
        this.state.front[5][2] +
        this.state.front[6][2] +
        this.state.front[7][2]) /
      this.state.front.length;

    var front = this.state.front.map((point, index) => {
      var z = point[2] - meanZ;
      var y = point[1] - meanY;
      var d = Math.sqrt(y * y + z * z);
      var angle = Math.atan2(y, z) + radians;
      return [
        point[0],
        meanY + d * Math.sin(angle),
        meanZ + d * Math.cos(angle)
      ];
    });
    this.setState({ front: front });
  };

  rotate2 = event => {
    this.rotateX(20);
  };

  rotateX = radians => {
    var meanX =
      (this.state.front[0][0] +
        this.state.front[1][0] +
        this.state.front[2][0] +
        this.state.front[3][0] +
        this.state.front[4][0] +
        this.state.front[5][0] +
        this.state.front[6][0] +
        this.state.front[7][0]) /
      this.state.front.length;

    var meanZ =
      (this.state.front[0][2] +
        this.state.front[1][2] +
        this.state.front[2][2] +
        this.state.front[3][2] +
        this.state.front[4][2] +
        this.state.front[5][2] +
        this.state.front[6][2] +
        this.state.front[7][2]) /
      this.state.front.length;

    var front = this.state.front.map((point, index) => {
      var z = point[2] - meanZ;
      var x = point[0] - meanX;
      var d = Math.sqrt(x * x + z * z);
      var angle = Math.atan2(x, z) + radians;
      return [
        meanX + d * Math.sin(angle),
        point[1],
        meanZ + d * Math.cos(angle)
      ];
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
            max="200"
            value={this.state.slideValue}
            className="slider"
            id="myRange"
            onChange={this.adjustSize}
          />
          <button onClick={this.rotate2}>y</button>
          <button onClick={this.rotate}>X</button>
        </div>
        {/* <div className="slidecontainer">
          <input
            type="range"
            min="0"
            max="360"
            value={this.state.rotateValue}
            className="slider"
            id="myRangeRotate"
            onChange={this.rotate}
          />
        </div> */}
        {/* <button onClick={this.rotate2}>y</button> */}
      </div>
    );
  }
}

export default Home;
