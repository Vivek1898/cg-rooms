import React, { useEffect } from "react";
import { Tabs } from "antd";
import { Tag } from "antd";
import Navbar from "../components/Navbar";
import OwnerRoute from "../Routes/OwnerRoute";
import OwnerUpdateScreen from "./OwnerUpdateScreen"
import OwnerBookingScreen from "./OwnerBookingScreen"
import OwnerGymBookingScreen from "./OwnerGymBookingScreen"
import OwnerMessBookingScreen from "./OwnerMessBookingScreen"


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
    <OwnerRoute>
 <div className="ml-3 mt-3">
    {user && user.isRoomOwner && <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Profile" key="1">
         <div>
         <h1 className="jumbotron text-center bg-primary square">Room Owner Dashboard</h1>

         <div className="row">
          
          <div className="col-xs-12 ml-5 mb-5">
        
            <div className="bs">
              <p>My Profile</p>
              <p>Owner Name : {user.name}</p>
              <p>Owner Email : {user.email}</p>
            
            </div>
          </div>
        </div>
         </div>
        </TabPane>
        
        <TabPane tab="Update Room" key="2">
          <OwnerUpdateScreen></OwnerUpdateScreen>
        </TabPane>
        <TabPane tab="Room Bookings" key="3">
          <OwnerBookingScreen></OwnerBookingScreen>
        </TabPane>
      
        
      </Tabs>}  



    </div>
<div>
  

{user && user.isMessOwner && <Tabs defaultActiveKey="4" onChange={callback}>
        <TabPane tab="Profile" key="4">
         <div>
         <h1 className="jumbotron text-center bg-primary square">Mess Owner Dashboard</h1>

         <div className="row">
          
          <div className="col-xs-12 ml-5 mb-5">
        
            <div className="bs">
              <p>My Profile</p>
              <p>Owner Name : {user.name}</p>
              <p>Owner Email : {user.email}</p>
            
            </div>
          </div>
        </div>
         </div>
        </TabPane>
    
        <TabPane tab="Mess Bookings" key="5">
          <OwnerMessBookingScreen></OwnerMessBookingScreen>
        </TabPane>
      
        
      </Tabs>}  
</div>
    
    <div>
      
      
    {user && user.isGymOwner && <Tabs defaultActiveKey="6" onChange={callback}>
        <TabPane tab="Profile" key="6">
         <div>
         <h1 className="jumbotron text-center bg-primary square">Gym Owner Dashboard</h1>

         <div className="row">
          
          <div className="col-xs-12 ml-5 mb-5">
        
            <div className="bs">
              <p>My Profile</p>
              <p>Owner Name : {user.name}</p>
              <p>Owner Email : {user.email}</p>
            
            </div>
          </div>
        </div>
         </div>
        </TabPane>
      
        <TabPane tab="Gym Bookings" key="7">
          <OwnerGymBookingScreen></OwnerGymBookingScreen>
        </TabPane>
      
        
      </Tabs>}  
    </div>
    </OwnerRoute>
  
    </>
  );
}

export default ProfileScreen;
