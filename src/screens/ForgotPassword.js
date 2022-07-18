import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { UserOutlined, LockOutlined, IdcardOutlined } from '@ant-design/icons';
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";

import { Input } from 'antd';
import { Button } from 'antd';

const ForgotPassword = () => {
  // state
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const[sent,setSent]=useState("");

  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  // redirect if user is logged in
  useEffect(() => {
    if(user!== null) history.push("home");
   }, [user])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent("");
    try {
      const { data } = await axios.post("api/users/forgot-password", { email });
      console.log(data)
      setSuccess(true);
      toast("Check your email for the secret code");
      setLoading(false);
      setSent("Code Sent")
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // console.log(email, code, newPassword);
    // return;
    try {
      setLoading(true);
      const { data } = await axios.post("api/users/reset-password", {
        email,
        code,
        newPassword,
      });
      setEmail("");
      setCode("");
      setNewPassword("");
      setLoading(false);
      toast("Great! Now you can login with your new password");
      history.push("/login")
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  return (
    <>
    <Navbar/>
      <h1 className="pt-5 text-center">
        Forgot Password
      </h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={success ? handleResetPassword : handleSubmit}>
          <Input
            type="email"
            className="form-control mb-4 p-0"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            placeholder="Enter email"
            prefix={<UserOutlined />}
            required
          />
          {success && (
            <>
              <Input
                type="text"
                className="form-control mb-4 p-0"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter secret code"
                prefix={<IdcardOutlined />}
                required
              />

              <Input.Password
                type="password"
                className="form-control mb-4 p-0"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                prefix={<LockOutlined />}
                required
              />
              <h6 className="text-primary">Also Check Spam For email </h6>
              <p className=" text-danger">
          <b className="cursor-pointer"onClick={handleSubmit}>
            <h6 className="text-danger cursor-pointer pointer2">Not Yet Recived ? <u className="text-info">Send Again</u></h6>
            
            </b>  
            <p className=" text-success">{sent}</p>
          </p>
            </>

          )}

          <Button
            type="primary"
            htmlType="submit" style={{ width: '100%' }} shape="round" size="large"
            disabled={loading || !email}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
