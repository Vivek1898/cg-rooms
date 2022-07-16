import React, { useEffect } from "react";
import { Tabs } from "antd";
import { Tag } from "antd";

import MyBookingScreen from "./MyBookingScreen";

import MyMessBookingScreen from "./MyMessBookingScreen";
import MyGymBookingScreen from "./MyGymBookingScreen";

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
    <div className="ml-3 mt-3">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Profile" key="1">
          <div className="row">
            <div className="col-xs-12 ml-5 mb-5">
              <div className="bs">
                <p>My Profile</p>
                <p>Name : {user.name}</p>
                <p>Email : {user.email}</p>
                <p>
                  IsAdmin :{" "}
                  {user.isAdmin ? (
                    <Tag color="green">YES</Tag>
                  ) : (
                    <Tag color="red">NO</Tag>
                  )}
                </p>
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
      </Tabs>
    </div>
  );
}

export default ProfileScreen;
