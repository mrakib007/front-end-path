import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  console.log('render')
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter((prevStatus) => prevStatus + 1)}
        className="btn btn-primary"
      >
        Increment
      </button>
      <button onClick={() => setCounter((prevStatus)=> prevStatus - 1)}
         className="btn btn-primary">Decrement</button>
      <button className="btn btn-danger" onClick={()=>setCounter(0)}>Reset</button>
    </div>
  );
};

export default UseState;
