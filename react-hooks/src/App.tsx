import { useState } from "react";
import "./App.css";
import UseState from "./pages/UseState";
import ControlledForm from "./pages/ControlledForm";
import UserRefExample from "./pages/Module3/UserRefExample";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <UseState counter={counter} setCounter={setCounter} />
      <ControlledForm />
      <UserRefExample/>
    </>
  );
}

export default App;
