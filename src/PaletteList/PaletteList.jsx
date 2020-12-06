import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import MiniPalette from '../MiniPalette/MiniPalette';
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white'
  },
  palette: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  },
};

class PaletteList extends Component {
  state = {  }
  render() {

    const { palettes, classes } = this.props

    const paletteName = palettes.map((palette, key) => (
      <div key={key}>
        <Link to={`/palette/${palette.id}`}>
          <MiniPalette {...palette}/>
        </Link>
      </div>
    ));

    return ( 
      <div className={classes.root} >
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1> React Colors</h1>
          </nav>
          <div className={classes.palette}>
            {paletteName}
          </div>
        </div>
      </div>
    );
  }
}
 
export default withStyles(styles)(PaletteList);