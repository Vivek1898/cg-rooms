import React, { useEffect } from "react";
import { Tabs } from "antd";
import { Tag } from "antd";

import MyBookingScreen from "./MyBookingScreen";
import MyMessBookingScreen from "./MyMessBookingScreen";
import MyGymBookingScreen from "./MyGymBookingScreen";
import Navbar from "../components/Navbar";
import UserRoute from "../Routes/UserRoute";
import MyMaidBookingScreen from "./MyMaidBookingScreen";
import MyLaundaryBookingRoute from "./MyLaundaryBookingRoute"
import { Link } from "react-router-dom";
const { TabPane } = Tabs;

function ProfileScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  function callback(key) {
    console.log(key);
  }

  return (
    <>
    <Navbar />
    <UserRoute>
    {user && <div className="ml-3 mt-3">
      <Tabs defaultActiveKey="1" onChange={callback} >
        <TabPane tab="Profile" key="1">
          <div className="row">
            <div className="col-xs-12 ml-5 mb-5">
              <div className="bs">
                <p>My Profile</p>
                <p>Name : {user.name}</p>
                <p>Email : {user.email}</p>

                {user.mobile &&  <p>Mobile : {user.mobile}</p> }
                <p>Email : {user.email}</p>
                {user && user.cgId &&  <p>UserId : {user.cgId}</p> }
              {user && user.isOwner && 
               <Link className="btn btn-success" to="/owner" style={{color:"fff",
                backgroundColor: "#28a745",
                borderColor: "#28a745"}}
               
               >
                 Go to Owner Dashboard
               </Link>
              }
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Room Booking" key="2">
          <MyBookingScreen></MyBookingScreen>
        </TabPane>
        <TabPane tab="Mess Booking" key="3">
          <MyMessBookingScreen></MyMessBookingScreen>
        </TabPane>
        <TabPane tab="Gym Booking" key="4">
          <MyGymBookingScreen></MyGymBookingScreen>
        </TabPane>

        <TabPane tab="Maid Booking" key="5">
          <MyMaidBookingScreen></MyMaidBookingScreen>
        </TabPane>
        <TabPane tab="Laundary Booking" key="6">
        <MyLaundaryBookingRoute></MyLaundaryBookingRoute>
        </TabPane>
        
      </Tabs>
    </div>}
    </UserRoute>
  
    </>
  );
}

export default ProfileScreen;
