import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    const [x, y] = [event.clientX, event.clientY]
    console.log(`Moving ${x}, ${y}`)
    drawChromeBoiAtCoords(x,y)
  }

  handleKeyDown = (e) => {
    if(e.key == "a"){
      console.log('resize up')
      resize("+")
    }else if(e.key ==="s"){
      console.log('resize down')
      resize("-")
    }
  }

  handleClick = (e) => {
    toggleCycling()
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
