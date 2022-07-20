import React, { useState } from "react";

import { Modal, Button, Carousel } from "react-bootstrap";
import {  Link } from "react-router-dom";
import { Card,Avatar } from 'antd';


import { Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;

function Room({ room, fromDate, toDate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    
    <div>
     
      {/* <div className="col-md-4">
        <img src={room.imageurls[0]} className="smallimg" alt="" />
      </div>
      <div className="col-md-7 ">
        <h1>{room.name}</h1>
        <b>
          <p>Availability: {room.maxcount}</p>
          <p>Phone Number : +91 7850037958</p>
          <p>Type : {room.type}</p>
        </b>

        <div style={{ float: "right" }} >
          {fromDate && toDate && (
            <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
              <button className="btn btn-primary mb-2 mr-2">Book Now</button>
            </Link>
          )}

          <button className="btn btn-primary mb-2 mr-2" onClick={handleShow}>
            View Detail
          </button>
        </div>
      </div> */}

{/* <Row gutter={16}>
        <Col className="gutter-row" span={8}>
        <Card
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[  <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,]}
        >
           <h1>{room.name}</h1>
        <b>
          <p>Availability: {room.maxcount}</p>
          <p>Phone Number : +91 7850037958</p>
          <p>Type : {room.type}</p>
</b>

          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
        </Col>

      
        </Row> */}


{/* 
<div class="card-deck container-fluid">
  <div class="card">
  <Carousel prevLabel="" nextLabel="">
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item   >
                  <img
                
                    className="d-block  smallimg"
                    src={url}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
 
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <h1>{room.name}</h1>
        <b>
          <p>Availability: {room.maxcount}</p>
          <p>Phone Number : +91 7850037958</p>
          <p>Type : {room.type}</p>
        </b>
    </div>

            <div style={{ float: "right" }} >
          {fromDate && toDate && (
            <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
              <button className="btn btn-primary mb-2 mr-2">Book Now</button>
            </Link>
          )}

          <button className="btn btn-primary mb-2 mr-2" onClick={handleShow}>
            View Detail
          </button>
        </div>
  </div>
  
</div> */}
  

 <div class="card-deck p-2">
  <div class="card p-2">
  <img src={room.imageurls[0]} className="smallimg" alt="" />

  {/* <Carousel  >
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item >
                  <img
                    className="d-block w-100 smallimg"
                    src={url}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel> */}
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <h1>{room.name}</h1>
        <b>
          <p>Availability: {room.maxcount}</p>
          <p>Phone Number : +91 7850037958</p>
          <p>Type : {room.type}</p>
        </b>
    </div>

            <div style={{ float: "right" }} >
          {fromDate && toDate && (
            <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
              <button className="btn btn-primary mb-2 mr-2">Book Now</button>
            </Link>
          )}

          <button className="btn btn-primary mb-2 mr-2" onClick={handleShow}>
            View Detail
          </button>
        </div>
  </div>
  
</div> 




      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src={url}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;