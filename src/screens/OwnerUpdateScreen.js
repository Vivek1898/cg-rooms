import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { SyncOutlined } from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { toast } from "react-toastify";

function MyBookingScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uniqueId, setUniqueId] = useState("");
   const[roomBookings,setRoomBookings]=useState("");
   const[avaiblity,setavaiblity]=useState("");
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const columns = [
    { title: "status", dataIndex: "status", key: "status" },
    {
      title: "name",
      dataIndex: "room",
      key: "room",
    },
    { title: "RoomId", dataIndex: "uniqueId", key: "uniqueId" },
    { title: "totalamount", dataIndex: "totalamount", key: "totalamount" },
    { title: "fromdate", dataIndex: "fromdate", key: "fromdate" },
    { title: "todate", dataIndex: "todate", key: "todate" },
    { title: "totaldays", dataIndex: "totaldays", key: "totaldays" },
  ];
//   async function fetchMyAPI() {
//     setError("");
//     setLoading(true);
//     try {
//       const data = (
//         await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/bookings/getbookingbyuserid`, {
//           userid: user._id,
//         })
//       ).data;
//       setBookings(data);
//     } catch (error) {
//       console.log(error);
//       setError(error);
//     }
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchMyAPI();
//   }, []);

//   async function cancelBooking(bookingid, roomid) {
//     setError("");
//     setLoading(true);
//     try {
//       const data = (
//         await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/bookings/cancelbooking`, {
//           bookingid,
//           roomid,
//         })
//       ).data;
//       setLoading(false);
//       Swal.fire(
//         "Congratulations",
//         "Your Room Cancelled Successfully",
//         "success"
//       ).then((result) => {
//         fetchMyAPI();
//       });
//     } catch (error) {
//       console.log(error);
//       //setError(error);
//       Swal.fire("Opps", "Error:" + error, "error");
//     }
//     setLoading(false);
//   }


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    //Get data to this end point
   try{
    setLoading(true);
     //If there any api exist server will target backend through proxy
    const {data}=await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/owner/ownerupdateroom`,{
      uniqueId
    });
    console.log(data.length);
    if(data.length===0){
        toast.error("Room Not Found")
    }else{
        toast.success("Room Found SucessFully")
    }
    setLoading(false);
    setRoomBookings(data);
   // console.log("Register  User" ,data)
   
 
   }catch(err){
  
  console.log(err)
  setLoading(false);
   }

  };



  const updateRoom = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    //Get data to this end point
   try{
    setLoading(true);
     //If there any api exist server will target backend through proxy
    const {data}=await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/owner/ownerupdateavail`,{
      uniqueId,avaiblity
    });
  //  console.log(data.length);
    toast.success("Room Updated")
    setLoading(false);
    setRoomBookings(data);
     setavaiblity("");
   // console.log("Register  User" ,data)
   
 
   }catch(err){
  
  console.log(err)
  setLoading(false);
   }

  };

  return (
    <>
    <h1 >Update Room Availability</h1>
      <div className="bg-primary pt-1" >
        
        <div className="container col-md-4 offset-md-4 pb-5 ">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            placeholder="Enter Room Id"
            required
          />

        
          <button type="submit" className="btn btn-block btn-dark"
               
          >
             {loading ? <SyncOutlined spin/>: "Submit" }
          </button>
        </form>
    </div>


    <div className="row justify-content-center mt-5">
      {roomBookings &&  (
        roomBookings.map((x) => {
          return (
            <div className="card-deck">
              <div
                className="card"
                style={{ margin: "40px", padding: "20px", width: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src={x.imageurls[0]}
                  alt="First slide"
                />
                <div className="card-body">
                  <h5 className="card-title">Your Room </h5>
                  <p className="card-text">RoomId : {x.uniqueId}</p>
                  <p className="card-text">Name : {x.name}</p>
                  <p className="card-text">Price Per Day : {x.rentperday}</p>
                  <p className="card-text text-info">Availability : {x.maxcount}</p>
                  <p className="card-text">TotalBookings : {x.currentbookings.length}</p>
                  <p className="card-text">Description : {x.description}</p>
             
                
              
                </div>
                <form onSubmit={updateRoom}>
          <input
            type="text"
            className="form-control mb-4 p-4 bg-dark"
            value={avaiblity}
            onChange={(e) => setavaiblity(e.target.value)}
            placeholder="Update Availablity"
            required
          />

        
          <button type="submit" className="btn btn-block btn-primary"
               
          >
             {loading ? <SyncOutlined spin/>: "Update" }
          </button>
        </form>
              </div>


            </div>
          );
        })
      )}
    </div>
   
  
    </div>
    </>
    
  
  );
}

export default MyBookingScreen;
