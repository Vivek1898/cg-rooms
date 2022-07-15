import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminMaidScreen() {
  const [maids, setMaid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Price", dataIndex: "price", key: "price" },

   
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/maid/getallmaids")).data;
      setMaid(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchMyData();
  }, []);

  return (
    // <div className="row">
    //   {loading ? (
    //     <Loader></Loader>
    //   ) : error.length > 0 ? (
    //     <Error msg={error}></Error>
    //   ) : (
    //     <div className="col-md-12">
    //       <Table columns={columns} dataSource={maids} />
    //     </div>
    //   )}
    // </div>



<div className="row justify-content-center mt-5">
{loading ? (
  <Loader></Loader>
) : error.length > 0 ? (
  <Error msg={error}></Error>
) : (
    maids.map((x) => {
    return (
  
    <div className="card-deck">
  <div className="card" style={{margin:"40px",padding:"20px"}} >

    <div className="card-body">
      <h5 className="card-title">Maid</h5>
      <p className="card-text">Name : {x.name}</p>
      <p className="card-text">Email : {x.email}</p>
      <p className="card-text">Mobile : {x.mobile}</p>
      <p className="card-text">Price : {x.price}</p>
      <a href="#" className="btn btn-primary">Book Now</a>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

</div>




    );
  })
)}
</div>
  );
}

export default AdminMaidScreen;