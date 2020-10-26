import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleClick = (event) => {
    toggleCycling()
  }

  handleKeyPress = (event) => {
    if (event.key === 'a') {
      resize('+')
    }
    if (event.key === 's') {
      resize('-')
    }    
  }  

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  
  render() {
    return (
      <canvas 
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
