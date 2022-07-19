import React, { useState,useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
import Navbar from "../components/Navbar";
import { useHistory,Link } from "react-router-dom";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submit, setSubmit] = useState(false);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const history = useHistory();
  useEffect(() => {
    if(user!== null) history.push("home");
   }, [user])

  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      //console.log(user);
      setLoading(true);
      setError("");
      setSuccess("");
      try {
        const result = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/users/register`, user)).data;
        console.log(result);
        setSuccess(result);
        setName("");
        setEmail("");
        setPassword("");
        setCpassword("");
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    } else {
      alert("Password not matched");
    }
  }

  const handleSubmit = () => {
    if (email && password && cpassword ) {
      setSubmit(true);
    }
  }


  return (
    <>
    <Navbar />
    <div className="login-main">
      {loading && <Loader></Loader>}
      {error.length > 0 && <Error msg={error}></Error>}

      <div className="row justify-content-center m-0">
        <div className="col-md-5">
          {success.length > 0 && <Success msg={success}></Success>}
          <div className="bs">
            <h2 style={{color: "rgb(225, 225, 225)"}}>Register</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
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
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
                handleSubmit();
              }}
              required
            />
            {loading ? (
              <div>Registering... Please Wait...</div>
            ) : (
              <button className="btn btn-primary mt-3 p-3" onClick={register} disabled={!submit}>
                Register
              </button>
            )}

<div className="p-3 m-2"style={{    backgroundColor: "rgb(0 0 0 / 80%)"}}>
<p className="text-center text-success    ">
          Already registered?{" "}
          <Link to="/login">
            <a>Login</a>
            </Link>  
          </p>
</div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default RegisterScreen;
