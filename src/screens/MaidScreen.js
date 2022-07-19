import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function AdminMaidScreen() {
  const [maids, setMaid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [booked, setbooked] = useState(false);
  const [error, setError] = useState("");
  const user = JSON.parse(localStorage.getItem("currentUser"));

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
      const data = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/maid/getallmaids`)).data;

      // for(x in data){
      //   let obj = x.currentbookings.find(o => o.name === user._id);
      //   console.log(obj)
      // }
    //   data.forEach(element => {
    //     console.log(element.currentbookings)
    //      let obj = element.currentbookings.find(o => {
    //       if(o.id){
    //         o.id === user._id
    //       }
         
    //      });
    //      if(obj){
    //       console.log(obj.id)
    //       setbooked(true);
    //      }
      
    //     // ...use `element`...
    // });
   //   console.log(data)
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

  async function onEditStudent(x){
    console.log(x);

  console.log(user._id)
  const userid=user._id

 


    setError("");
    setLoading(true);
    try {
      const data = await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/maid/bookmaid`, {
        userid,
        x
      });
      console.log(data);
     toast.success("Maid Booked SuccessFully");
     fetchMyData();
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  return (
    <>
    <Navbar />
    {/* <div className="row">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="col-md-12">
          <Table columns={columns} dataSource={maids} />
        </div>
      )}
    </div> */}

    <div className="row justify-content-center mt-5">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        maids.map((x) => {
          return (
            <div className="card-deck">
              <div className="card" style={{ margin: "40px", padding: "20px" }}>
                <div className="card-body">
                  <h5 className="card-title">Maid</h5>
                  <p className="card-text">Name : {x.name}</p>
                  {/* <p className="card-text">Email : {x.email}</p>
                  <p className="card-text">Mobile : {x.mobile}</p> */}
                  <p className="card-text">Price : {x.price}</p>

                  { user &&  x.currentbookings.find(e => e.id === user._id) && <a href="#" className="btn btn-primary">
                    Already Booked
                  </a>}
                  {/* {booked && <a href="#" className="btn btn-primary">
                    Already Booked
                  </a>} */}
             {user && (!x.currentbookings.find(e => e.id === user._id))   &&  <a href="#" className="btn btn-primary"   onClick={() => {
              onEditStudent(x);
            }}>
                    Book Now
                  </a>}
                  {!user &&      <Link to="/login" className="btn btn-primary"  >
                  Login to  Book Now
                  </Link>}
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
    </>
  );
}

export default AdminMaidScreen;