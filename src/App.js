import Pallete from "./Pallete/Pallete";
import "./App.css";
import seedColors from "./seedColors";

function App() {
  return (
    <div >
      <Pallete {...seedColors[5]} />
    </div>
  );
}

export default App;
