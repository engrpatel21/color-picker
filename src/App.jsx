import Pallete from "./Pallete/Pallete";
import "./App.css";
import seedColors from "./seedColors";
import generatePalette from './colorHelpers'
import {Route} from 'react-router-dom'

function App() {
  const h1 = <h1>Palette List</h1>

  return (
    <div >
      <Route exact path='/' render={() => 'here' } />
      <Route exact path='/palette/:id' render={()=> 'individual palette'} />
      {/* <Pallete palette={generatePalette(seedColors[4])} /> */}
    </div>
  );
}

export default App;
