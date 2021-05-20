import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    drawChromeBoiAtCoords(x, y)
  }

  handleClickEvent = (e) => {
    toggleCycling()
  }

  handleKeyPress = (e) => {
    const key = e.key
    switch(key) {
      case 'a':
        resize('+')
        break;
      case 's':
        resize('-')
        break;
      default:
        console.log('Ignoring random keypress')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyPress}
        onClick={this.handleClickEvent}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
