import React, { Dispatch } from "react";

type TCounter = {
  counter: number;
  setCounter: Dispatch<React.SetStateAction<number>>;
};
const UseState = ({ counter, setCounter }: TCounter) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        Increment
      </button>
    </div>
  );
};

export default UseState;
