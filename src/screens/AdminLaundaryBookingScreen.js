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
    { title: "laundaryid", dataIndex: "laundaryid", key: "laundaryid" },
    { title: "rentperday", dataIndex: "rentperday", key: "rentperday" },
    { title: "userid", dataIndex: "userid", key: "userid" },
    { title: "name", dataIndex: "name", key: "name" },
    { title: "phonenumber", dataIndex: "phonenumber", key: "phonenumber" },
   
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
      const data = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/laundary/getallbookings`)).data;
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
