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
    { title: "maid Id", dataIndex: "_id", key: "_id" },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    { title: "uniqueId", dataIndex: "uniqueId", key: "uniqueId" },
    { title: "email", dataIndex: "email", key: "email" },
    { title: "mobile", dataIndex: "mobile", key: "mobile" },
    { title: "price", dataIndex: "price", key: "price" },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/maid/getallmaids`)).data;
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
    <div className="row">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="col-md-12">
          <Table columns={columns} dataSource={maids} />
        </div>
      )}
    </div>
  );
}

export default AdminMaidScreen;
