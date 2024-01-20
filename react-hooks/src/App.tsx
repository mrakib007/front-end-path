import { useContext, useState } from "react";
import "./App.css";
import UseState from "./pages/UseState";
import ControlledForm from "./pages/ControlledForm";
import UserRefExample from "./pages/Module3/UserRefExample";
import { TThemeContext, ThemeContext } from "./pages/Module3/context/ThemeProvider";
import { MenuItem, MenuList } from "./pages/Module3/Menu";
import Profile from "./pages/Module3/Profile";
import Game from "./pages/Module3/Game";
import UsersContainer from "./pages/Module3/UsersContainer";
import Select from "./pages/Module3/Select";

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
      {/* <Profile/>
      <Game/> */}
      {/* <UsersContainer/> */}
      <Select>
        <Select.SelectOption value="option1">Option1</Select.SelectOption>
        <Select.SelectOption value="option2">Option2</Select.SelectOption>
        <Select.SelectOption value="option3">Option3</Select.SelectOption>
        <Select.SelectOption value="option4">Option4</Select.SelectOption>
      </Select>
    </div>
  );
}

export default App;
