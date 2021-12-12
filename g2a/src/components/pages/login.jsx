import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";

function Login() {
  var [user, setuser] = useState({});
  let history = useHistory();

  var handleChange = (e) => {
    var x = user;
    x[e.target.name] = e.target.value;
    console.log(x);
    setuser(x);
  };

  var login = () => {
    axios
      .post("http://localhost:5000/api/login", user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("session", JSON.stringify(res.data));
        if (res.data !== "wrong username") {
          history.push("/");
        } else {
          alert("Wrong user name or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <label htmlFor="">
        username
        <input name="userName" type="text" onChange={handleChange} />
      </label>
      <label htmlFor="">
        password{" "}
        <input name="password" type="password" onChange={handleChange} />
      </label>
      <button onClick={login}>login</button>
    </div>
  );
}

export default Login;
