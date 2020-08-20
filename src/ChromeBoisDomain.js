import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  on_click = () => {
    toggleCycling()
  }
  on_key_press = (event) => {
    event.key === 'a' ? resize('+') : resize('-')
  }
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick={this.on_click}
        onKeyDown={this.on_key_press}>
      </canvas>
    )
  }
}
