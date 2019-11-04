import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let x = event.clientX
    let y = event.clientY

    drawChromeBoiAtCoords(x, y)
  }

  handlePress(event) {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.handlePress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
