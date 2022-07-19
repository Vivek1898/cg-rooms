import React from "react";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Form = () => {
  const [Name, setName] = useState("");
  const [PgName, setPgName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Whatsapp, setWhatsapp] = useState("");
  const [PgType, setPgType] = useState("");
  const [RoomAvailable, setRoomAvailable] = useState("");
  const [Location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      Name,
      PgName,
      Mobile,
      Whatsapp,
      PgType,
      RoomAvailable,
      Location,
    };
    console.log(formData);

    axios.post(process.env.REACT_APP_OWNER_API, formData).then((response) => {
      console.log(response);
    });
    toast("Congratulation " + Name + " Registration Sucessfull");
    e.target.reset();
  };

  return (
    <div className='main'>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2 style={{ color: "rgb(225, 225, 225)" }}>Register Your PG</h2>
            <br />
          </div>
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-item" id="create-course-form">
                {/* <label>Name:</label> */}
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeHolder="Name"
                  required
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  onChange={(e) => setPgName(e.target.value)}
                  placeholder="Pg Name"
                  required
                />
              </div>
              <div className="form-item">
                <input
                  type="number"
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <div className="form-item">
                <input
                  type="number"
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="WhatsApp Number"
                  required
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  onChange={(e) => setPgType(e.target.value)}
                  placeholder="PG type"
                  required
                />
              </div>
              <div className="form-item">
                <input
                  type="number"
                  onChange={(e) => setRoomAvailable(e.target.value)}
                  placeholder="Room Available"
                  required
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  required
                />
              </div>
              <button className="submit-btn" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
