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

 <Tabs
        defaultActiveKey="1"
    
        style={{
          marginBottom: 32,
        }}
      >
    {user && user.isRoomOwner &&      <TabPane tab="Tab 1" key="1">
       
    
    <Tabs defaultActiveKey="1" type="card" onChange={callback}>
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
      
        
      </Tabs>
        </TabPane>}  
        {user && user.isMessOwner &&     <TabPane tab="Tab 2" key="4">
       
 <Tabs defaultActiveKey="4" onChange={callback}>
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
      
        
      </Tabs>
        </TabPane>}  
        {user && user.isGymOwner &&    <TabPane tab="Tab 3" key="6">
    <Tabs defaultActiveKey="6" onChange={callback}>
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
      
        
      </Tabs>
        </TabPane>}  
      </Tabs>




    </div>

    </OwnerRoute>
  
    </>
  );
}

export default ProfileScreen;
