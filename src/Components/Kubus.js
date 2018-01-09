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
      this.props.vertices[1][2],
      this.props.vertices[1][3],
      this.props.vertices[1][4],
      this.props.vertices[1][5],
      "z"
    ].join(" ");
    return (
      <path
        d={pathData}
        vertices={this.props.vertices}
        fill="none"
        strokeWidth="2"
        stroke="white"
      />
    );
  }
}

Kubus.propTypes = {};

export default Kubus;
