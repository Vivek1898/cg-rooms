import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminRoomScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    {
      title: "laundaryid",
      dataIndex: "_id",
      key: "_id",
    },
    { title: "uniqueId", dataIndex: "uniqueId", key: "uniqueId" },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    { title: "address", dataIndex: "address", key: "address" },
    { title: "phonenumber", dataIndex: "phonenumber", key: "phonenumber" },
    { title: "rentperday", dataIndex: "rentperday", key: "rentperday" },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/laundary/getallaundary")).data;
      setRooms(data);
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
        <>
          <div className="col md-12">
            <button className="btn btn-success" onClick={fetchMyData}>
              Refresh
            </button>
          </div>
          <div className="col-md-12">
            <Table columns={columns} dataSource={rooms} />
          </div>
        </>
      )}
    </div>
  );
}

export default AdminRoomScreen;
