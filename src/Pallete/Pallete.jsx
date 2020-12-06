import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox'
import './Palette.css'
import Navbar from '../Navbar/Navbar'


class Palette extends Component {
  state = { 
    level: 500,
    format: 'hex'
  }
  changeLevel = (newLevel) => {
    this.setState({ level: newLevel})
  }
  changeFormat = (val) => {
    this.setState({format: val})
  }
  render() { 
    const { colors } = this.props.palette
    const { level, format } = this.state
    const colorBoxes = colors[level].map((color, key) => 
      <ColorBox background={color[format]} name={color.name} key={key} ></ColorBox>
    )
    return ( 
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">
            {colorBoxes}
        </div>
        </div>
      );
   }
}
 
export default Palette;
