import React, { useState, useEffect } from "react";
import axios from "axios";
import { auth, googleAuthProvider, FacebookAuthProvider } from ".././firebase";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Navbar from "../components/Navbar";

import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { toast } from "react-toastify";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const[cgId,setcgId]=useState("")
  useEffect(() => {
    if (user !== null) history.push("home");
  }, [user]);
  async function Login() {
    setLoading(true);
    const user = {
      email,
      password,
    };
    //console.log(user);
    try {
      const result = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/users/login`, user)).data;
     // console.log(result);
      localStorage.setItem("currentUser", JSON.stringify(result.user));
      localStorage.setItem("access_token", result.token);
      history.push("/home")
      toast.success("Welcome " + result.user.name)
    } catch (error) {
      console.log(error);
      setError("Invalid Credentials");
    }
    setLoading(false);
  }

  const handleSubmit = () => {
    if (email && password) {
      setSubmit(true);
    }
  };

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/users/getalluserslength`)).data;
    //  console.log(data.data)
    
      const  og=Number(data.data)+Number(2);
      const uid="CGUSER"+og
     console.log(uid)
         setcgId(uid)
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMyData();
  }, []);



  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
      //  console.log(user.email);
      //  console.log(user.displayName);
        const idTokenResult = await user.getIdTokenResult();
      //  console.log(user);
        const post = await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/users/crateuser`, {
          email: user.email,
          dname: user.displayName,
          cgId:cgId
        });
      // console.log(post.data.user);
        localStorage.setItem("currentUser", JSON.stringify(post.data.user));
        localStorage.setItem("access_token", post.data.token);
        history.push("/home")
      toast.success("Welcome " + post.data.user.name)
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="login-main">
        {loading && <Loader></Loader>}

        <div className="row justify-content-center m-0">
          <div className="col-md-5">
            {error.length > 0 && <Error msg={error}></Error>}
            <div className="bs">
              <h2 style={{ color: "rgb(225, 225, 225)" }}>Login</h2>

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
                  handleSubmit();
                }}
              />
              {loading ? (
                <div>Login...Please Wait...</div>
              ) : (
                <button
                  className="btn btn-primary mt-3"
                  onClick={Login}
                  disabled={!email || !password}
                >
                  Login
                </button>
              )}

              <Button
                onClick={googleLogin}
                type="danger"
                className="my-3"
                block
                shape="round"
                icon={<GoogleOutlined />}
                size="large"
              >
                Login with Google
              </Button>
             <div style={{    backgroundColor: "rgb(0 0 0 / 80%)"}}>
             <p className="text-center text-success p-3   ">
         Not Yet registered?{" "}
          <Link to="/register">
            <a c>Register</a>
            </Link>  
          </p>

              <p className="text-center text-danger pb-3 ">
                <Link to="/forgot-password">
                  <a className="text-danger"> Forgot password</a>
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

export default LoginScreen;