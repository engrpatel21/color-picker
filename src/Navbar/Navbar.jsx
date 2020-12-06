import React, { Component } from 'react';
import './Navbar.css'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core'
import {Close} from '@material-ui/icons'

class Navbar extends Component {
  state = { 
    format: 'hex',
    open: false
  }
  handleChangeFormat = (e) => {
    this.setState({ format: e.target.value, open: !this.state.open }, () => {
      this.props.changeFormat(this.state.format);
    })
  }
  handleClose = (e) => {
    this.setState({open: !this.state.open})
  }
  render() {
    const { level, changeLevel } = this.props
    const {format, open} = this.state
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
          <Select onChange={this.handleChangeFormat} value={format}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          onClose={this.handleClose}
          autoHideDuration={3000}
          message={<span id='message-id'>Formate Changed to {format.toUpperCase()}</span>}
          contentProps={{
            'aria-describedby': 'message-id'
          }}
          action={[
            <IconButton
              onClick={this.handleClose}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <Close/>
            </IconButton>
          ]}
        />
      </header>
    );
    }
}
 
export default Navbar;