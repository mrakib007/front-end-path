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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    const inputName = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [inputName]: value });
  };

  //DRY -> Do not repeat yourself
  return (
    <form onSubmit={handleSubmit}>
      <input
        // onChange={(e) => setName(e.target.value)}
        onChange={handleChange}
        type="text"
        name="name"
      ></input>
      <input
        //   onChange={(e)=> setEmail(e.target.value)} type="text" name="email"></input>
        onChange={handleChange}
        type="text"
        name="email"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
