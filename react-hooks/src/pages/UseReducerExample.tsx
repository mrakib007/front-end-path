import React, { ChangeEvent, useReducer } from "react";
// const initialState = {
//   count: 0,
// };
type TAction = {
    type: string;
    payload: string;
}
const initialState = {
  name: "",
  email: "",
};

// const reducer = (currentState, action) => {
//     console.log("Current State => ", currentState)
//     console.log("Action Type => ", action)
//     switch (action.type) {
//         case 'increment':
//             return {count: currentState.count + 1};
//         case 'decrement':
//             return {count: currentState.count - 1};
//         case 'incrementBySetAmount':
//             return {count: currentState.count + action.payload};

//         default:
//             return currentState;
//     }
// }
const reducer = (currentState : typeof initialState, action : TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addEmail":
      return { ...currentState, email: action.payload };
    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    // <div>
    //   <h1>{state.count}</h1>
    //   <button onClick={()=> dispatch({type:"increment"})}>Increment</button>
    //   <button onClick={()=> dispatch({type:"decrement"})}>Decrement</button>
    //   <button onClick={()=> dispatch({type:"incrementBySetAmount",payload: 3})}>Increment By 3</button>
    // </div>

    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        type="text"
        name="name"
      />
      <input
        onChange={(e) =>
          dispatch({ type: "addEmail", payload: e.target.value })
        }
        type="text"
        name="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseReducerExample;
