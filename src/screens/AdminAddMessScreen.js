import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, InputNumber, Button, Select } from "antd";


import FileUpload from "../components/FileUpload"
import Swal from "sweetalert2";

import Loader from "../components/Loader";
import Error from "../components/Error";
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


const initialState = {

  images: [
   
  ],

};
const emptyState = {

  images: [
   
  ],

};
function AdminAddRoomScreen() {
  const { Option } = Select;

  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const[Length,setLength]=useState("")
  const [form] = Form.useForm();
  const [Imagevalues, setImagevalues] = useState(initialState);
  const [visible, setVisible] = useState(false);
  const[loadingDelete,setLoadingDelete]=useState(false);
  const [Images,setImages]=useState([]);
  const onFinish = async (values) => {
   // console.log(values);
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/food/addmess`, {values,Images,Length,tokenv:localStorage.getItem("access_token")})).data;
      Swal.fire("Congratulations", "Your Mess Added Successfully", "success");
      form.resetFields();
      setImagevalues(emptyState);
      setImages(Images.splice(0, Images.length))
      window.location.reload();


    } catch (error) {
      console.log(error);
      setError(error);
      Swal.fire("Opps", "Error:" + error, "error");
    }

    setLoading(false);
  };




  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/food/getallmess`)).data;
      console.log(data.length)
      setLength(data.length);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMyData();
  }, []);


  const onReset = () => {
    form.resetFields();
  };

  return (
   <>
    <div className="p-3">
            <FileUpload
            className="p-3"
              Imagevalues={Imagevalues}
              setImagevalues={setImagevalues}
              loadingDelete={loadingDelete}
              setLoadingDelete={setLoadingDelete}
              visible={visible}
              setVisible={setVisible}
              Images={Images}
              setImages={setImages}
       
            />
          </div>

   
   <div className="row">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="col-md-12">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="maxcount"
              label="maxcount"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber min={1} defaultChecked={1} />
            </Form.Item>
            <Form.Item
              name="phonenumber"
              label="phonenumber"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="rentperday"
              label="rentperday"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber min={1} defaultChecked={1} />
            </Form.Item>
           
            <Form.Item
              name="type"
              label="type"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select a Mess type" allowClear>
              <option value="VEG">VEG</option>
              <option value="NON-VEG">NON-VEG</option>
              </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="success" htmlType="submit">
                Add
              </Button>
              <Button type="danger" htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
   </>
  );
}

export default AdminAddRoomScreen;
