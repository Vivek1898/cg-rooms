import { useEffect, useState } from "react";
import axios from "axios";

import { SyncOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const UserRoute = ({ children }) => {
  // state
  const [ok, setOk] = useState(false);
  // router

  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
        const tt=localStorage.getItem("access_token");
       // console.log(tt)
      const { data } = await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/users/current-user`,{tokenv:localStorage.getItem("access_token")});
       //  console.log(data);
      if (data.ok) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      history.push("/login")
      
    }
  };

  return (
    <>
      {!ok ? (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-primary p-5"
        />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default UserRoute;
