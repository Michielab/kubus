import React, { Component } from "react";
import Kubus from "./Kubus";
import * as FontAwesome from "react-icons/lib/fa";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideValue: 1,
      kubus: [
        [700, 200, 400],
        [700, 500, 400],
        [1000, 500, 400],
        [1000, 200, 400],
        [700, 200, 700],
        [700, 500, 700],
        [1000, 500, 700],
        [1000, 200, 700]
      ]
    };
  }

  adjustSize = event => {
    var x = parseInt(event.target.value);
    var xS = parseInt(this.state.slideValue);
    console.log(x);
    var kubus = [
      [200, 400, 400],
      [200, 600 + x, 400],
      [400 + x, 600 + x, 400],
      [400 + x, 400, 400],
      [200, 400, 600 + x],
      [200, 600 + x, 600 + x],
      [400 + x, 600 + x, 600 + x],
      [400 + x, 400, 600 + x]
    ];

    if (x < this.state.slideValue) {
      kubus = [
        [
          this.state.kubus[0][0],
          this.state.kubus[0][1],
          this.state.kubus[0][2]
        ],
        [
          this.state.kubus[1][0],
          this.state.kubus[1][1] - xS,
          this.state.kubus[1][2]
        ],
        [
          this.state.kubus[2][0] - xS,
          this.state.kubus[2][1] - xS,
          this.state.kubus[2][2]
        ],
        [
          this.state.kubus[3][0] - xS,
          this.state.kubus[3][1],
          this.state.kubus[3][2]
        ],
        [
          this.state.kubus[4][0],
          this.state.kubus[4][1],
          this.state.kubus[4][2] - xS
        ],
        [
          this.state.kubus[5][0],
          this.state.kubus[5][1] - xS,
          this.state.kubus[5][2] - xS
        ],
        [
          this.state.kubus[6][0] - xS,
          this.state.kubus[6][1] - xS,
          this.state.kubus[6][2] - xS
        ],
        [
          this.state.kubus[7][0] - xS,
          this.state.kubus[7][1],
          this.state.kubus[7][2] - xS
        ]
      ];
    } else {
      kubus = [
        [
          this.state.kubus[0][0],
          this.state.kubus[0][1],
          this.state.kubus[0][2]
        ],
        [
          this.state.kubus[1][0],
          this.state.kubus[1][1] + x,
          this.state.kubus[1][2]
        ],
        [
          this.state.kubus[2][0] + x,
          this.state.kubus[2][1] + x,
          this.state.kubus[2][2]
        ],
        [
          this.state.kubus[3][0] + x,
          this.state.kubus[3][1],
          this.state.kubus[3][2]
        ],
        [
          this.state.kubus[4][0],
          this.state.kubus[4][1],
          this.state.kubus[4][2] + x
        ],
        [
          this.state.kubus[5][0],
          this.state.kubus[5][1] + x,
          this.state.kubus[5][2] + x
        ],
        [
          this.state.kubus[6][0] + x,
          this.state.kubus[6][1] + x,
          this.state.kubus[6][2] + x
        ],
        [
          this.state.kubus[7][0] + x,
          this.state.kubus[7][1],
          this.state.kubus[7][2] + x
        ]
      ];
    }

    this.setState({ slideValue: event.target.value, kubus: kubus });
  };

  rotateY = radians => {
    var meanY = 0;
    var meanZ = 0;
    this.state.kubus.forEach((el, index) => {
      meanY += el[1] / this.state.kubus.length;
      meanZ += el[2] / this.state.kubus.length;
    });

    var kubus = this.state.kubus.map((point, index) => {
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
    this.setState({ kubus: kubus });
  };

  rotateX = radians => {
    var meanX = 0;
    var meanZ = 0;
    this.state.kubus.forEach((el, index) => {
      meanX += el[0] / this.state.kubus.length;
      meanZ += el[2] / this.state.kubus.length;
    });

    var kubus = this.state.kubus.map((point, index) => {
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
    this.setState({ kubus: kubus });
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
          <Kubus vertices={this.state.kubus} className="kubus">
            kubus
          </Kubus>
        </svg>
        <div className="controls-container">
          <div className="slidecontainer">
            <input
              type="range"
              min="1"
              max="20"
              value={this.state.slideValue}
              className="slider"
              id="myRange"
              onChange={this.adjustSize}
            />
            <div className="arrows">
              <FontAwesome.FaArrowLeft
                size={40}
                className="arrow-left"
                onClick={() => this.rotateX(-1)}
              />
              <FontAwesome.FaArrowUp
                size={40}
                className="arrow-up"
                onClick={() => this.rotateY(-1)}
              />
              <FontAwesome.FaArrowDown
                size={40}
                className="arrow-down"
                onClick={() => this.rotateY(1)}
              />
              <FontAwesome.FaArrowRight
                size={40}
                className="arrow-right"
                onClick={() => this.rotateX(1)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
