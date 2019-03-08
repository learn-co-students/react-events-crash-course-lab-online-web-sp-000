import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove(e) {
    drawChromeBoiAtCoords(e.clientX, e.clientY);
  }

  handleClick() {
    toggleCycling();
  }

  handleKeyDown(e) {
    resize(e.key==='a' ? '+' : e.key==='s' ? '-' : null)
  }
  
  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        width="900"
        height="600"
        tabIndex="0"
      />
    );
  }
}
