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
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const columns = [
    {
        title: "status",
        dataIndex: "status",
        key: "status",
        render: (status) => (
          <>
            {status === "booked" ? (
              <Tag color="green">CONFIRMED</Tag>
            ) : (
              <Tag color="red">CANCELLED</Tag>
            )}
          </>
        ),
      },
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
    { title: "Booked By", dataIndex: "cgId", key: "cgId" },
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
    const {data}=await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/owner/getbookingbyuserid`,{
      uniqueId
    });
    console.log(data.length);
    if(data.length===0){
        toast.error("No Bookings Found For Mess")
    }else{
        toast.success("Mess Bookings Found SucessFully")
    }
    setLoading(false);
    setRoomBookings(data);
   // console.log("Register  User" ,data)
   
 
   }catch(err){
  
  console.log(err)
  setLoading(false);
   }

  };

  return (
   <>
       <h1 >Total Bookings</h1>
   <div className="bg-primary pt-2" >
        <div className="container col-md-4 offset-md-4 pb-5 ">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            placeholder="Enter Mess Id"
            required
          />

        
          <button type="submit" className="btn btn-block btn-primary"
               
          >
             {loading ? <SyncOutlined spin/>: "Submit" }
          </button>
        </form>
    </div>

    {roomBookings &&  <div className="row">
      
        <div className="col-md-12">
          <Table columns={columns} dataSource={roomBookings} />
        </div>
    
    </div>}
    </div>
   </>
  );
}

export default MyBookingScreen;
