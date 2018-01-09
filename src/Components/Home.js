import React, { Component } from "react";
import Kubus from "./Kubus";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideValue: 1,
      kubus: [[200, 400], [200, 600, 400, 600, 400, 400]]
    };
  }
  adjustSize = event => {
    var x = parseInt(event.target.value);
    console.log(typeof x);
    this.setState({
      slideValue: event.target.value,
      kubus: [[200, 400], [200, 600 + x, 400 + x, 600 + x, 400 + x, 400]]
    });
  };
  render() {
    return (
      <div className="home-container">
        <svg width="800" height="800" className="kubus-container">
          <Kubus vertices={this.state.kubus} />
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
      </div>
    );
  }
}

export default Home;
