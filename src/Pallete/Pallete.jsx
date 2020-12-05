import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox'
import './Palette.css'

class Palette extends Component {
   state = {  }
   render() { 
      const colorBoxes = this.props.colors.map((color, key) => 
       <ColorBox background={color.color} name={color.name} key={key} ></ColorBox>
      )
      return ( 
         <div className="Palette">
            {/* navBar */}
            <div className="Palette-colors">
               {colorBoxes}
            </div>
            {/* footer */}
         </div>
       );
   }
}
 
export default Palette;