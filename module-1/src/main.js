import React from "react";
import { ReactDOM } from "react-dom/client";
import { HelloWorld, anotherFunction } from "./another";

const App = () => {
  return React.createElement(
    "h1",
    { style: { color: "red" } },
    "This is a simple react app",
    HelloWorld(),
    anotherFunction()
  );
};

// const HelloWorld = () => {
//   return <h1>Hello World</h1>;
// };

// const App = () => {
//   return (
//     <React.Fragment>
//       <div>This is a simple react app</div>
//       <HelloWorld />
//     </React.Fragment>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(React.createElement(App));
console.log(root);
