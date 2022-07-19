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
  const [error, setError] = useState("");
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    // { title: "Email", dataIndex: "email", key: "email" },
    // { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Price", dataIndex: "price", key: "price" },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/laundary/getallaundary")).data;
      setMaid(data);
      console.log(data);
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
      const data = await axios.post("/api/laundary/booklaundary", {
        userid,
        x
      });
      console.log(data);
     toast.success("Laundary Booked SuccessFully");
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
                  <h5 className="card-title">Laundary</h5>
                  <p className="card-text">Name : {x.name}</p>
                  <p className="card-text">Price Per Day : {x.rentperday}</p>
                  {/* <p className="card-text">Mobile : {x.phonenumber}</p>
                  <p className="card-text">address : {x.address}</p> */}
                  <p className="card-text">Description : {x.description}</p>
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
