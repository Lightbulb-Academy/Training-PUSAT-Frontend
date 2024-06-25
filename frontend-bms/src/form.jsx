import { useState } from "react";
import { Card } from "./components/card";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(name, email);
  };


  return (
    <>
      <Card />
      <div>
        <h1>Form</h1>
        <input
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Form;
