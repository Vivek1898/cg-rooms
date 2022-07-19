import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminBookingScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    { title: "uniqueId", dataIndex: "uniqueId", key: "uniqueId" },
    { title: "maidid", dataIndex: "maidid", key: "maidid" },
    { title: "price", dataIndex: "price", key: "price" },
    { title: "userid", dataIndex: "userid", key: "userid" },
    { title: "name", dataIndex: "name", key: "name" },
    { title: "mobile", dataIndex: "mobile", key: "mobile" },
   
    {  title: "status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <>
          {!status ? (
            <Tag color="green">CONFIRMED</Tag>
          ) : (
            <Tag color="red">CANCELLED</Tag>
          )}
        </>
      ),
    },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/maid/getallbookings")).data;
      setBookings(data);
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
          <Table columns={columns} dataSource={bookings} />
        </div>
      )}
    </div>
  );
}

export default AdminBookingScreen;
