import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let x = event.clientX;     // Get the horizontal coordinate
    let y = event.clientY;     // Get the vertical coordinate
    drawChromeBoiAtCoords(x, y)
  }

  handleKeyDown = (e) => {
    if (e.key === 'a') {
      resize('+')
    } else if (e.key === 's') {
    resize('-')
    }
  }

  render() {

    return (
      <canvas
        onClick={toggleCycling()}
        onKeyDown={this.handleKeyDown}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
