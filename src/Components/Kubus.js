import React, { Component } from "react";
import PropTypes from "prop-types";

class Kubus extends Component {
  render() {
    const pathData = [
      "M",
      this.props.vertices[0][0],
      this.props.vertices[0][1],
      "L",
      this.props.vertices[1][0],
      this.props.vertices[1][1],
      this.props.vertices[2][0],
      this.props.vertices[2][1],
      this.props.vertices[3][0],
      this.props.vertices[3][1],
      "z",
      "M",
      this.props.vertices[4][0],
      this.props.vertices[4][1],
      "L",
      this.props.vertices[5][0],
      this.props.vertices[5][1],
      this.props.vertices[6][0],
      this.props.vertices[6][1],
      this.props.vertices[7][0],
      this.props.vertices[7][1],
      "z",
      "M",
      this.props.vertices[0][0],
      this.props.vertices[0][1],
      "L",
      this.props.vertices[4][0],
      this.props.vertices[4][1],
      "M",
      this.props.vertices[1][0],
      this.props.vertices[1][1],
      "L",
      this.props.vertices[5][0],
      this.props.vertices[5][1],
      "M",
      this.props.vertices[2][0],
      this.props.vertices[2][1],
      "L",
      this.props.vertices[6][0],
      this.props.vertices[6][1],
      "M",
      this.props.vertices[3][0],
      this.props.vertices[3][1],
      "L",
      this.props.vertices[7][0],
      this.props.vertices[7][1]
    ].join(" ");
    return (
      <path
        className="kubus"
        id={this.props.className}
        d={pathData}
        vertices={this.props.vertices}
        fill="none"
        strokeWidth="1"
        stroke="white"
      />
    );
  }
}

Kubus.propTypes = {};

export default Kubus;
