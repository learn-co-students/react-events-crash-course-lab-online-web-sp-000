import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    return( 
      drawChromeBoiAtCoords(event.clientX, event.clientY)
    )
  }

  toggle = () => {
    return (
      toggleCycling()
    )
  }
  
  keypress = (event) => {
    if (event.key == "a") {
      resize("+")
    } else if (event.key == "-") {
      resize("-")
    } else {
      resize("-")
    }
  }
  
   
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.toggle}
        onKeyDown={this.keypress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
