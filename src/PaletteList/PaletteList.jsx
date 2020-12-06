import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class PaletteList extends Component {
  state = {  }
  render() {
    const { palettes } = this.props
    const paletteName = palettes.map((palette) => (
      <p>
        <Link exact to={`/palette/${palette.id}`}>
          {palette.paletteName}
        </Link>
      </p>
    ));
    return ( 
      <div>
        <h1>React Colors</h1>
        {paletteName}
      </div>
    );
  }
}
 
export default PaletteList;