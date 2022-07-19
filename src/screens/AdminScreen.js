import React, { useState, useEffect } from "react";

import { Tabs } from "antd";
import AdminBookingScreen from "./AdminBookingScreen";
import AdminRoomScreen from "./AdminRoomScreen";
import AdminUserScreen from "./AdminUserScreen";
import AdminAddRoomScreen from "./AdminAddRoomScreen";
import AdminAddMaidScreen from "./AdminAddMaidScreen";
import AdminMaidScreen from "./AdminMaidScreen";
import AdminAddMessScreen from "./AdminAddMessScreen";
import AdminMessScreen from "./AdminMessScreen";
import AdminMessBookingScreen from "./AdminMessBookingScreen";
import AdminMaidBookingScreen from"./AdminMaidBookingScreen";
import AdminLaundaryBookingScreen from"./AdminLaundaryBookingScreen";
import AdminAddGymScreen from "./AdminAddGymScreen";
import AdminGymScreen from "./AdminGymScreen";
import AdminGymBookingScreen from "./AdminGymBookingScreen";
import AdminLaundaryScreen from "./AdminLaundaryScreen";
import AdminAddLaundaryScreec from "./AdminAddLaundaryScreec";
import Navbar from "../components/Navbar";
import AdminRoute from "../Routes/AdminRoute"
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
function AdminScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user || user.isAdmin == false) {
      window.location.href = "/home";
    }
  }, []);

  return (
    <>
    <Navbar />
    <AdminRoute><div className="ml-3 mt-3 mr-3 bs">
      <h1 className="text-center">Admin Panel</h1>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Bookings" key="1">
          <AdminBookingScreen></AdminBookingScreen>
        </TabPane>
        <TabPane tab="Rooms" key="2">
          <AdminRoomScreen></AdminRoomScreen>
        </TabPane>
        <TabPane tab="Add Room" key="3">
          <AdminAddRoomScreen></AdminAddRoomScreen>
        </TabPane>
        <TabPane tab="Users" key="4">
          <AdminUserScreen></AdminUserScreen>
        </TabPane>
        <TabPane tab="Add Maid" key="5">
          <AdminAddMaidScreen></AdminAddMaidScreen>
        </TabPane>
        <TabPane tab="Maids" key="6">
          <AdminMaidScreen></AdminMaidScreen>
        </TabPane>
        <TabPane tab=" Add Mess" key="7">
          <AdminAddMessScreen></AdminAddMessScreen>
        </TabPane>
        <TabPane tab="Mess" key="8">
          <AdminMessScreen></AdminMessScreen>
        </TabPane>
        <TabPane tab="Mess Booking" key="9">
          <AdminMessBookingScreen></AdminMessBookingScreen>
        </TabPane>

        <TabPane tab=" Add Gym" key="10">
          <AdminAddGymScreen></AdminAddGymScreen>
        </TabPane>
        <TabPane tab="Gym" key="11">
          <AdminGymScreen></AdminGymScreen>
        </TabPane>
        <TabPane tab="Gym Booking" key="12">
          <AdminGymBookingScreen></AdminGymBookingScreen>
        </TabPane>

        <TabPane tab="Laundary" key="13">
          <AdminLaundaryScreen></AdminLaundaryScreen>
        </TabPane>
        <TabPane tab="Add Laundary " key="14">
          <AdminAddLaundaryScreec></AdminAddLaundaryScreec>
        </TabPane>
        <TabPane tab="Maid Booking" key="15">
        <AdminMaidBookingScreen></AdminMaidBookingScreen>
        </TabPane>
        <TabPane tab="Laundary Booking" key="16">
        <AdminLaundaryBookingScreen></AdminLaundaryBookingScreen>
        </TabPane>
        
      </Tabs>
    </div></AdminRoute>
    
    </>
  );
}

export default AdminScreen;
