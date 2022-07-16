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

    axios.post(process.env.REACT_OWNER_API, formData).then((response) => {
      console.log(response);
    });
    toast("Congratulation " + Name + " Registration Sucessfull");
    e.target.reset();
  };

  return (
    <div>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2>PG OWNER</h2>
            <br />
            <h3>REGISTER</h3>
          </div>
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-item" id="create-course-form">
                <label>Name:</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-item">
                <label>PgName:</label>
                <input
                  type="text"
                  onChange={(e) => setPgName(e.target.value)}
                  required
                />
              </div>
              <div className="form-item">
                <label>Mobile Number:</label>
                <input
                  type="number"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="form-item">
                <label>Whatsapp Number:</label>
                <input
                  type="number"
                  onChange={(e) => setWhatsapp(e.target.value)}
                  required
                />
              </div>
              <div className="form-item">
                <label>Pg Type:</label>
                <input
                  type="text"
                  onChange={(e) => setPgType(e.target.value)}
                  required
                />
              </div>
              <div className="form-item">
                <label>RoomAvailable:</label>
                <input
                  type="number"
                  onChange={(e) => setRoomAvailable(e.target.value)}
                  required
                />
              </div>
              <div className="form-item">
                <label>Location:</label>
                <input
                  type="text"
                  onChange={(e) => setLocation(e.target.value)}
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
