import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
//   const [count, setCount] = useState(0);
const [hidden, setHidden] = useState(false);
  // useEffect(()=>{
  //     console.log('Render');

  //     return () =>{
  //         console.log('inside cleanup')
  //     }
  // },[hidden])

//   useEffect(() => {
//     setInterval(() => {
//       // setCount(count+1)
//       setCount((prev) => prev + 1);
//     }, 1000);
//   }, []);
  return (
    <div>
 <button onClick={()=> setHidden((prev)=> !prev)}>{hidden ? 'Show' : 'Hide'}</button> 
      {/* <h1>{count}</h1> */}
      {!hidden && <Counter/>}
    </div>
  );
};

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
       const intervalId =  setInterval(() => {
          // setCount(count+1)
          setCount((prev) => prev + 1);
        }, 1000);

        return () =>{
            clearInterval(intervalId)
        }
      }, []);
    return  <h1>{count}</h1>
};

const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal; //property
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1',{signal})
    .then(res => res.json())
    .then(data => console.log(data));

    return () =>{
      controller.abort(); //method
    }
  }, []);
  return <div>Todo</div> //9 minutes 50 seconds
}

export default UseEffectExample;


