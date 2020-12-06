import React, { Component } from 'react';
import './Navbar.css'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Select, MenuItem } from '@material-ui/core'

class Navbar extends Component {
  state = { 
    format: 'hex'
  }
  handleChange = (e) => {
    this.setState({ format: e.target.value }, () => {
      this.props.changeFormat(this.state.format);
    })
   
  }
  render() {
    const { level, changeLevel, colorCode } = this.props
    const {format} = this.state
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
        <div className="select-container">
          <Select onChange={this.handleChange} value={format}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1)</MenuItem>
          </Select>
        </div>
      </header>
    );
    }
}
 
export default Navbar;