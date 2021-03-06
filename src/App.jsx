import Pallete from "./Pallete/Pallete";
import "./App.css";
import seedColors from "./seedColors";
import generatePalette from './colorHelpers'
import { Route } from 'react-router-dom'
import PaletteList from "./PaletteList/PaletteList";


function App() {
  
  const findPalette = id => seedColors.find(palette => palette.id === id)

  return (
    <div >
      <Route exact path='/'
        render={() => <PaletteList palettes={seedColors}/> } />
      <Route exact path='/palette/:id'
        render={(routeProps) => (
          <Pallete palette={generatePalette(
            findPalette(routeProps.match.params.id)
          )}/>
        )} />
      {/* <Pallete palette={generatePalette(seedColors[4])} /> */}
    </div>
  );
}

export default App;
