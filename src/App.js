import Pallete from "./Pallete/Pallete";
import "./App.css";
import seedColors from "./seedColors";
import generatePalette from './colorHelpers'

function App() {
  console.log(generatePalette(seedColors[4]))
  return (
    <div >
      <Pallete {...seedColors[5]} />
    </div>
  );
}

export default App;
