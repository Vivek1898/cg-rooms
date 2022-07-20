import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
import moment from "moment";

import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Navbar from "../components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

const { RangePicker } = DatePicker;

function Homescreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [rooms, setRooms] = useState([]);

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [duplicateRooms, setDuplicateRooms] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [type, setType] = useState("all");

  useEffect(() => {
    async function fetchMyAPI() {
      try {
      //  console.log(process.env.REACT_APP_STRIPE_KEY)
        setError("");
        setLoading(true);
        const data = (await axios.get(`${process.env.REACT_APP_GLOBAL_API}/api/rooms/getallrooms`)).data;
        //console.log(data);
        setRooms(data);
        setDuplicateRooms(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    }

    fetchMyAPI();
  }, []);

  function filterByDate(dates) {
    // console.log(moment(dates[0]).format("DD-MM-YYYY"));
    // console.log(moment(dates[1]).format("DD-MM-YYYY"));
    try {
      setFromDate(moment(dates[0]).format("DD-MM-YYYY"));
      setToDate(moment(dates[1]).format("DD-MM-YYYY"));

      var tempRooms = [];
      for (const room of duplicateRooms) {
        var availability = true;
        
        //
        if (availability === true ) {
          tempRooms.push(room);
        }
      }
      setRooms(tempRooms);
    } catch (error) {}
  }

  function filterBySearch() {
    const tempRooms = duplicateRooms.filter((x) =>
      x.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setRooms(tempRooms);
  }
  function filterByType(type) {
    setType(type);
    console.log(type);
    if (type !== "all") {
      const tempRooms = duplicateRooms.filter(
        (x) => x.type.toLowerCase() === type.toLowerCase()
      );
      setRooms(tempRooms);
    } else {
      setRooms(duplicateRooms);
    }
  }

  return (
    <>
    <Navbar />
    <div className="container d-flex flex-column">
      <div className="row mt-5 bs align-items-center" style={{backgroundColor: "rgb(0, 63, 145)"}}>
        <div className="col-md-3">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>

        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="search rooms"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            onKeyUp={filterBySearch}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-control"
            value={type}
            onChange={(e) => {
              filterByType(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="1-BHK">1-BHK</option>
            <option value="2-BHK">2-BHK</option>
            <option value="3-BHK">3-BHK</option>
          </select>
        </div>
      </div>

      <h1 className="m-auto pt-5">Select Date for bookings</h1>

      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader></Loader>
        ) : error.length > 0 ? (
          <Error msg={error}></Error>
        ) : (
          rooms.map((x) => {
            return (
              <div >
                <Room room={x} fromDate={fromDate} toDate={toDate} />
              </div>
            );
          })
        )}
      </div>
    </div>
    </>
  );
}

export default Homescreen;