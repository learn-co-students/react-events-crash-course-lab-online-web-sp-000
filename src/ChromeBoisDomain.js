import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    console.log(event.clientX, event.clientY)
    {drawChromeBoiAtCoords(event.clientX,event.clientY )}
  }
  
  handleMouseClick = (event) => {
    console.log('click')
    {toggleCycling()}
  }

  handleKeyPress = (event) => {
  console.log(event.keyCode)
    if (event.key === 'a'){
      {resize('+')}
      console.log('growing')
    } else if (event.key === 's'){
      {resize('-')}
      console.log('shrinking')
    }
  } 

  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseClick}
        onKeyDown={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
