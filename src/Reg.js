import axios from "axios";
import { useState } from "react";

function Reg() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/reg", data);
      alert("Registered successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Register</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      /><br />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Reg;