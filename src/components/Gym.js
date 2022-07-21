import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Mess({ room, fromDate, toDate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>


    <div class="card-deck p-2">
      <div class="card p-2" style={{width: "20rem"}}>
        <Carousel>
          {
            room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img src={url} className="smallimg" />
                </Carousel.Item>
              )
            })
          }
        </Carousel>

        <div class="card-body">
          <h4 class="card-title">{room.name}</h4>

          <b>
            <p>Availability: {room.maxcount}</p>
            <p>Phone Number : +91 7850037958</p>
            <p>Type : {room.type}</p>
          </b>
        </div>

        <div style={{ float: "right" }}>
          {fromDate && toDate && (
            <Link to={`/bookgym/${room._id}/${fromDate}/${toDate}`}>
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

export default Mess;
