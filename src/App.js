import Pallete from "./Pallete";
import "./App.css";
import seedColors from "./seedColors";

function App() {
  return (
    <div >
      <Pallete color={seedColors[4]} />
    </div>
  );
}

export default App;
