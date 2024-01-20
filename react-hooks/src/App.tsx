import { useContext, useState } from "react";
import "./App.css";
import UseState from "./pages/UseState";
import ControlledForm from "./pages/ControlledForm";
import UserRefExample from "./pages/Module3/UserRefExample";
import { TThemeContext, ThemeContext } from "./pages/Module3/context/ThemeProvider";
import { MenuItem, MenuList } from "./pages/Module3/Menu";
import Profile from "./pages/Module3/Profile";
import Game from "./pages/Module3/Game";

function App() {
  const [counter, setCounter] = useState(0);
  const {dark,setDark} = useContext(ThemeContext) as TThemeContext;
  console.log(dark)
  return (
    <div className={`h-scree w-full flex justify-center items-center
    ${dark ? 'bg-black': 'bg-white'}`}>
    <div>
      <button className="btn btn-primary" 
      onClick={()=> setDark(!dark)}>Toggle</button>
    </div>
      {/* <UseState counter={counter} setCounter={setCounter} />
      <ControlledForm />
      <UserRefExample/>
      <MenuList>
        <MenuItem></MenuItem>
      </MenuList> */}
      <Profile/>
      <Game/>
    </div>
  );
}

export default App;
