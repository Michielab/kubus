import React, { Component } from "react";
import Kubus from "./Kubus";

class Home extends Component {
  render() {
    const vertices = [[20, 20], [40, 40]];
    return (
      <div>
        <svg width="800" height="800" className="kubus-container">
          <Kubus vertices={vertices} />
        </svg>
      </div>
    );
  }
}

export default Home;
