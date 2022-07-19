import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Tag } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";

function MyBookingScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("currentUser"));

  async function fetchMyAPI() {
    setError("");
    setLoading(true);
    try {
      const data = (
        await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/laundary/getbookingbyuserid`, {
          userid: user._id,
        })
      ).data;
      setBookings(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  async function cancelBooking(bookingid, messid) {
    setError("");
    setLoading(true);
    try {
      const data = (
        await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/messbooking/cancelbooking`, {
          bookingid,
          messid,
        })
      ).data;
      setLoading(false);
      Swal.fire(
        "Congratulations",
        "Your Room Cancelled Successfully",
        "success"
      ).then((result) => {
        fetchMyAPI();
      });
    } catch (error) {
      console.log(error);
      //setError(error);
      Swal.fire("Opps", "Error:" + error, "error");
    }
    setLoading(false);
  }

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="row">
          <div className="col-md-6  ml-5">
            {bookings &&
              bookings.map((booking) => {
                return (
                  <div className="bs">
                    <h1>{booking.room}</h1>
                    <p>
                      <b>BookingId:</b> {booking._id}
                    </p>
                    <p>
                      <b>Name:</b> {booking.name}
                    </p>
                    <p>
                      <b>Mobile:</b> {booking.phonenumber}
                    </p>
                    <p>
                      <b>Rentperday:</b> {booking.rentperday}
                    </p>
                    <p>
                      <b>Status:</b>{" "}
                      <Tag color="green">CONFIRMED</Tag>
                    </p>
               
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyBookingScreen;
