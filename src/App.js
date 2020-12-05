import Pallete from "./Pallete/Pallete";
import "./App.css";
import seedColors from "./seedColors";
import generatePalette from './colorHelpers'

function App() {
  return (
    <div >
      <Pallete palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
