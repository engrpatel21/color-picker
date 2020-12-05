import React, { Component } from 'react';
import './Navbar.css'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Navbar extends Component {
  state = { 

  }
  render() {
    const {level, changeLevel} = this.props
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">React Color Picker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
              step={100}
              trackStyle={{
                backgroundColor: "transparent",
                width: "340px",
              }}
              railStyle={{ height: "8px" }}
              handleStyle={{
                backgroundColor: "green",
                outline: "none",
                border: "2px",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      </header>
    );
    }
}
 
export default Navbar;