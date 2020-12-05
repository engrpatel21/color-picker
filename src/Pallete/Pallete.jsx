import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox'
import './Palette.css'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

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
            {/* navBar */}
            <div className='slider'>
               <Slider defaultValue={level}
                  min={100}
                  max={900}
                  onAfterChange={this.changeLevel}
                  step={100}
                  trackStyle={{
                     backgroundColor: 'transparent',
                     width: '340px'
                  }}
                  railStyle={{ height: '8px' }}
                  handleStyle={{
                     backgroundColor: 'green',
                     outline: 'none',
                     border: '2px',
                     boxShadow: 'none'
                  }}
               />
            </div>
            <div className="Palette-colors">
               {colorBoxes}
            </div>
            {/* footer */}
         </div>
       );
   }
}
 
export default Palette;