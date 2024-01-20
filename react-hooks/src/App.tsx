import { useContext, useState } from "react";
import "./App.css";
import UseState from "./pages/UseState";
import ControlledForm from "./pages/ControlledForm";
import UserRefExample from "./pages/Module3/UserRefExample";
import { ThemeContext } from "./pages/Module3/context/ThemeProvider";

function App() {
  const [counter, setCounter] = useState(0);
  const {dark,setDark} = useContext(ThemeContext);
  console.log(dark)
  return (
    <div className={`h-scree w-full flex justify-center items-center
    ${dark ? 'bg-black': 'bg-white'}`}>
    <div>
      <button className="btn btn-primary" 
      onClick={()=> setDark(!dark)}>Toggle</button>
    </div>
      <UseState counter={counter} setCounter={setCounter} />
      <ControlledForm />
      <UserRefExample/>
    </div>
  );
}

export default App;
