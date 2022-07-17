import React, { useState } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Error from "../components/Error";
import Navbar from "../components/Navbar";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function Login() {
    setLoading(true);
    const user = {
      email,
      password,
    };
    //console.log(user);
    try {
      const result = (await axios.post("/api/users/login", user)).data;
      console.log(result);
      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
      setError("Invalid Credentials");
    }
    setLoading(false);
  }
  return (
    <>
    <Navbar />
    <div className="login-main">
      {loading && <Loader></Loader>}

      <div className="row justify-content-center m-0">
        <div className="col-md-5">
          {error.length > 0 && <Error msg={error}></Error>}
          <div className="bs">
            <h2 style={{color: "rgb(225, 225, 225)"}}>Login</h2>

            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {loading ? (
              <div>Login...Please Wait...</div>
            ) : (
              <button className="btn btn-primary mt-3" onClick={Login}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginScreen;
