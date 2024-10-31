import React, {useContext, useState} from "react";
import UserContext from "./Hooks/Usecontext/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});

    console.log("submitted");
    //whatever we type inside of the username and password input we want to get the value and store that inside of our user state
  };
  return (
    <div>
      <h1>Context API</h1>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="enter text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
