import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Navbar from "../components/Navbar";
import {useHistory} from 'react-router-dom'
import { toast } from "react-toastify";
function Bookingscreen({ match }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [room, setRoom] = useState({});
  const [avaial, setAvaial] = useState(false);
  const [bookings, setBookings] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [maxcount, setMaxCout] = useState(0);

  const roomid = match.params.roomid;
  const fromdate = moment(match.params.fromdate, "DD-MM-YYYY");
  const todate = moment(match.params.todate, "DD-MM-YYYY");
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      history.push("/login");
     // window.location.href = "/login";
    }
 
    async function fetchMyAPI() {
      try {
        setError("");
        setLoading(true);
        const data = (
          await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/rooms/getroombyid`, {
            roomid: match.params.roomid,
          })
        ).data;
        // var date1=data.currentbookings[0].fromdate
        //  var date1=data.currentbookings.find({fromdate})
        //   var date2=new Date (fromdate._i)
        // console.log(data.currentbookings[0].fromdate)
        // console.log(fromdate._i)
        // console.log("2"+date2 )
        // console.log(data.currentbookings);

        //  if(data.currentbookings){
        //   data.currentbookings.forEach((x, i) =>{
        //     // console.log(x)
        //      //if(x.fromdate=== date2)
        //     // date_from_user > start_date && date_from_user < end_date

        //      if(fromdate._i <x.fromdate ||

        //       todate._i>x.todate){
        //        console.log("true")
        //        setAvaial(true);
        //      }else if(fromdate._i >x.todate && todate._i>x.todate){
        //        console.log("false")
        //        setAvaial(true);
        //      }
        //    } )
        //  }
        // $start_date = date_create(fromdate._i);
        // $date_from_user = date_create(todate._i);
        // $end_date = date_create(todate._i);

        // $interval1 = date_diff($start_date, $date_from_user);
        // $interval2 = date_diff($end_date, $date_from_user);

        // if($interval1->invert == 0){
        //   if($interval2->invert == 1){

        //      // if it lies between start date and end date execute this code

        //   }
        // }

        setMaxCout(data.maxcount);
        setRoom(data);
        // if(data.currentbookings){
        //   setBookings(data.currentbookings)
        //   console.log(bookings)
        // }
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    }

    fetchMyAPI();
  }, []);

  useEffect(() => {
    const totaldays = moment.duration(todate.diff(fromdate)).asDays() + 1;
    setTotalDays(totaldays);
    setTotalAmount(totalDays * room.rentperday);
  }, [room]);

  const onToken = async (token) => {
    console.log(token);
    const bookingDetails = {
      room,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      cgId: JSON.parse(localStorage.getItem("currentUser")).cgId,
      fromdate,
      todate,
      totalAmount,
      totaldays: totalDays,
      token,
      maxcount,
    };

    try {
      setLoading(true);
      const result = await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/bookings/bookroom`, bookingDetails);
      setLoading(false);
      Swal.fire(
        "Congratulations",
        "Your Room Booked Successfully",
        "success"
      ).then((result) => {
        history.push("/profile");
        toast.success("Check your bookings")
      });
    } catch (error) {
      setError(error);
      Swal.fire("Opps", "Error:" + error, "error");
    }
    setLoading(false);
    //TESTING CARD
    //https://stripe.com/docs/testing
    //https://www.npmjs.com/package/react-stripe-checkout
    // fetch("/save-stripe-token", {
    //   method: "POST",
    //   body: JSON.stringify(token),
    // }).then((response) => {
    //   response.json().then((data) => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  };

  return (
    <>
    <Navbar />
    <div className="m-5">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="row justify-content-center mt-5 bs">
          <div className="col-md-6">
            <h1>{room.name}</h1>
            <img src={room.imageurls[0]} alt="" className="bigimg"  style={{"width":"100%"}}/>
          </div>
          <div className="col-md-6">
            <div style={{ textAlign: "right" }}>
              <h1>Booking Details</h1>
              <hr />
              <b>
                <p>
                  Name : {JSON.parse(localStorage.getItem("currentUser")).name}
                </p>
                <p>From Date : {match.params.fromdate}</p>
                <p>To Date : {match.params.todate}</p>
                <p>Available Room : {room.maxcount}</p>
              </b>
            </div>
            <div style={{ textAlign: "right" }}>
              <h1>Amount</h1>
              <hr />
              <b>
                <p>Total Days : {totalDays}</p>
                <p>Rent per day : {room.rentperday}</p>
                <p>Total Amount : {totalAmount}</p>
              </b>
            </div>
            <div></div>
            {maxcount === 0 ? (
              <ul>
                <div>Booking Full </div>

                <div>Please Choose Another Room</div>
              </ul>
            ) : (
              <div style={{ float: "right" }}>
                <StripeCheckout
                  amount={totalAmount * 100}
                  currency="INR"
                  token={onToken}
                  stripeKey={process.env.REACT_APP_STRIPE_KEY}
                >
                  <button className="btn btn-primary">Pay Now</button>
                </StripeCheckout>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Bookingscreen;
