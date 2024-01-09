import React, { useState } from "react";

const ControlledForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        // onChange={(e) => setName(e.target.value)}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
      ></input>
      <input
        //   onChange={(e)=> setEmail(e.target.value)} type="text" name="email"></input>
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type="text"
        name="email"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
