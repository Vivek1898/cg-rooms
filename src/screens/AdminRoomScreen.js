import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Modal, Input } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminRoomScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [availablity, setAvailablity] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (record) => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "roomid",
      dataIndex: "_id",
      key: "_id",
    },
    { title: "uniqueId", dataIndex: "uniqueId", key: "uniqueId" },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    { title: "maxcount", dataIndex: "maxcount", key: "maxcount" },
    { title: "phonenumber", dataIndex: "phonenumber", key: "phonenumber" },
    { title: "rentperday", dataIndex: "rentperday", key: "rentperday" },
    { title: "type", dataIndex: "type", key: "type" },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <>
          <Button
            onClick={() => {
              onEditStudent(record);
            }}
          >
            Set
          </Button>

          <Button type="primary" onClick={showModal}>
            Update
          </Button>
          <Modal
            title="Update"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Update Availablity</p>
            <Input
              value={availablity}
              onChange={(e) => {
                setAvailablity(e.target.value);
              }}
            />
            <Button
              key="submit"
              type="primary"
              onClick={() => {
                updateData(editingStudent, availablity);
              }}
            >
              Submit
            </Button>
            ,
          </Modal>

          <DeleteOutlined
            onClick={() => {
              onEditStudent(record);
            }}
            style={{ color: "red", marginLeft: 12 }}
          />
        </>
      ),
    },
  ];
  async function updateData(record, availablity) {
    setError("");
    setLoading(true);
    console.log(record);
    console.log(availablity);

    try {
      const data = await axios.post("/api/rooms/updateavail", {
        record,
        availablity,
      });
      console.log(data);
      fetchMyData();
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  const onEditStudent = (record) => {
    setEditingStudent(record._id);
    console.log(record._id);
  };
  // const onEditStudent = (record) => {
  //   console.log(record._id)

  // };

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("/api/rooms/getallrooms")).data;
      setRooms(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMyData();
  }, []);

  return (
    <div className="row">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <>
          <div className="col md-12">
            <button className="btn btn-success" onClick={fetchMyData}>
              Refresh
            </button>
          </div>
          <div className="col-md-12">
            <Table columns={columns} dataSource={rooms} />
          </div>
        </>
      )}
    </div>
  );
}

export default AdminRoomScreen;
