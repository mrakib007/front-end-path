import { useState } from "react";
import "./App.css";
import UseState from "./pages/UseState";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <UseState counter={counter} setCounter={setCounter} />
    </>
  );
}

export default App;
