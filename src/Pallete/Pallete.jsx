import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox'
import './Palette.css'
import Navbar from '../Navbar/Navbar'


class Palette extends Component {
   state = { 
      level: 500
   }
   changeLevel = (newLevel) => {
      this.setState({ level: newLevel})
   }
   render() { 
      const { colors } = this.props.palette
      const { level } = this.state
      const colorBoxes = colors[level].map((color, key) => 
       <ColorBox background={color.hex} name={color.name} key={key} ></ColorBox>
      )
      return ( 
        <div className="Palette">
          <Navbar level={level} changeLevel={ this.changeLevel }/>
          <div className="Palette-colors">
              {colorBoxes}
          </div>
         </div>
       );
   }
}
 
export default Palette;