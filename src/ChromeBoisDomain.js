import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const x = event.clientX; // The clientX and clientY properties get the coordinates of the mouse on the horizontal and vertixal axis.
    const y = event.clientY
    
    drawChromeBoiAtCoords(x, y);
  }
   
  captureKey = (event) => {
    if (event.key == 'a'){
      resize('+')
    } else if (event.key == 's'){
      resize('-')
    }
  }
   
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.captureKey}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
